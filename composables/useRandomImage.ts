import { ref } from 'vue'

export function useRandomImage() {
  const randomImage = ref('')

  const pickRandomImage = (gallery: string) => {
    if (gallery && Array.isArray(gallery) && gallery.length > 0) {
      const filteredGallery = gallery.filter(
        (image) =>
          image.endsWith('.webp') ||
          image.endsWith('.png') ||
          image.endsWith('.jpg') ||
          image.endsWith('.jpeg')
      )
      if (filteredGallery.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredGallery.length)
        randomImage.value = filteredGallery[randomIndex]
      } else {
        console.warn('No valid images found in gallery:', gallery)
      }
    }
  }

  return { randomImage, pickRandomImage }
}
