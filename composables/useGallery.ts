async function getGalleryImages(galleryName: string) {
  const response = await fetch(`/images/${galleryName}/gallery.json`)
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  const galleryData = await response.json()
  return galleryData.images
}
