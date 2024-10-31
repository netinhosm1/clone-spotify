document.addEventListener("DOMContentLoaded", () => {
  const artistsData = [
    { name: "artista 1", image: "./img/Red.png" },
    { name: "artista 2", image: "./img/Red.png" },
    { name: "artista 3", image: "./img/Red.png" },
    { name: "artista 4", image: "./img/Red.png" },
    { name: "artista 5", image: "./img/Red.png" },
    { name: "artista 6", image: "./img/Red.png" },
    { name: "artista 5", image: "./img/Red.png" },
  ]

  const albumsData = [
    { name: "album 1", artist: "Artista 1", image: "./img/quad-2.jpg" },
    { name: "album 2", artist: "Artista 2", image: "./img/quad-1.jpg" },
    { name: "album 3", artist: "Artista 3", image: "./img/quad-2.jpg" },
    { name: "album 4", artist: "Artista 4", image: "./img/quad-1.jpg" },
    { name: "album 5", artist: "Artista 5", image: "./img/quad-2.jpg" },
    { name: "album 6", artist: "Artista 6", image: "./img/quad-1.jpg" },
    { name: "album 5", artist: "Artista 5", image: "./img/quad-2.jpg" },
  ]

  const artistGrid = document.querySelector(".artists-grid")
  const albumsGrid = document.querySelector(".albums-grid")

  artistsData.forEach((artist) => {
    const artistCard = document.createElement("div")
    artistCard.classList.add("artist-card")
    artistCard.innerHTML = `
    <img src=${artist.image} alt= imagem do ${artist.name}> </img>
    <h3>${artist.name}</h3>
    <p>Artista</p> 
  `
    artistGrid.appendChild(artistCard)
  })

  albumsData.forEach((album) => {
    const albumCard = document.createElement("div")
    albumCard.classList.add("album-card")
    albumCard.innerHTML = `
    <img src= ${album.image} alt= imagem do ${album.name}></img>
    <h3>${album.name}</h3>
    <p>${album.artist}</p>
    `
    albumsGrid.appendChild(albumCard)
  })
})
