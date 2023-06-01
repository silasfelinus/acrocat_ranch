<!-- ./pages/blog/[…slug.vue] -->

<script setup>
const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, async () => {
  // fetch document where the document path matches with the cuurent route
  let article = queryContent().where({ _path: path }).findOne()
  // get the surround information,
  // which is an array of documeents that come before and after the current document
  let surround = queryContent()
    .only(['_path', 'title', 'description'])
    .sort({ date: 1 })
    .findSurround(path)

  return {
    article: await article,
    surround: await surround
  }
})

// destrucure `prev` and `next` value from data
const [prev, next] = data.value.surround
console.log({ data, prev, next })

// set the meta
useHead({
  title: data.value.article.title,
  meta: [
    { name: 'description', content: data.value.article.description },
    {
      hid: 'og:image',
      property: 'og:image',
      content: `https://site.com/${data.value.article.img}`
    }
  ]
})
</script>
<template>
  <main id="main" class="article-main">
    <header v-if="data.article" class="article-header">
      <div class="img-cont h-72 mb-12">
        <img
          :src="`/${data.article.img}`"
          :alt="data.article.title"
          class="rounded-2xl"
        />
      </div>
      <h1 class="heading">{{ data.article.title }}</h1>
      <p class="supporting">{{ data.article.description }}</p>
      <ul class="article-tags">
        <li v-for="(tag, n) in data.article.tags" :key="n" class="tag">
          {{ tag }}
        </li>
      </ul>
    </header>
    <hr />
    <section class="article-section">
      <aside class="aside">
        <!-- Toc Component -->
        <Toc :links="data.article.body.toc.links" />
      </aside>
      <article class="article">
        <!-- render document coming from query -->
        <ContentRenderer :value="data.article">
          <!-- render rich text from document
          <MarkdownRenderer :value="data.article" /> -->

          <!-- display if document content is empty -->
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </article>
    </section>

    <!-- PrevNext Component -->
    <PrevNext :prev="prev" :next="next" />
  </main>
</template>
