// WildcardText.ts

interface FileContent {
  slug: string
  text: string
}

export class WildcardText {
  files = ref<FileContent[]>([])
  selectedFile = ref<string | null>(null)
  randomLine = ref<string | null>(null)
  defaultWildcard = 'DreamScenarios'

  constructor(private content: (path: string) => any) {
    this.fetchFiles()
  }

  async fetchFiles() {
    this.files.value = await this.content('wildcards').fetch()
  }

  async fetchRandomLine() {
    if (!this.selectedFile.value) return
    const file: FileContent = await this.content(
      `wildcards/${this.selectedFile.value}`
    ).fetch()
    const lines = file.text.split('\n')
    this.randomLine.value = lines[Math.floor(Math.random() * lines.length)]
  }
}
