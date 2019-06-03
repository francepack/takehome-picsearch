export const cleanPhotoData = (photoData) => {
  return photoData.results.map(photo => {
    let tags = ''
    if (photo.tags.length) {
      tags = photo.tags.map(tag => (tag.title))
    }
    return(
      {
        id: photo.id,
        created_at: photo.created_at,
        name: photo.description,
        likes: photo.likes,
        description: photo.alt_description,
        tags: tags,
        url: photo.urls.full,
        user: photo.user.username,
        width: photo.width,
        height: photo.height
      }
    )
  })
}