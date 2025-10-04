// ARCHIVO: Serie Post Data.js
var dataCatalogo = [
  {
    title: "Nombre de la Serie de Ejemplo",
    img: "https://via.placeholder.com/300x450.png?text=Poster+Serie",
    category: "series",
    sinopsis: "Esta es la sinopsis de una increíble serie que te mantendrá al borde de tu asiento. Aventura, misterio y drama se entrelazan en cada episodio.",
    tags: ["Drama", "Misterio", "Acción"],
    year: "2023",
    seasons: [
      {
        season: 1,
        episodes: [
          {
            episode: 1,
            title: "El Comienzo de Todo",
            // NUEVA ESTRUCTURA PARA IDIOMAS
            languages: {
              "es": "URL_DIRECTA_DEL_VIDEO_EN_ESPAÑOL.mp4", // O URL de streaming .m3u8
              "en": "URL_DIRECTA_DEL_VIDEO_EN_INGLES.mp4",
              "sub": "URL_DIRECTA_DEL_VIDEO_SUBTITULADO.mp4"
            }
          },
          {
            episode: 2,
            title: "Un Nuevo Desafío",
            languages: {
              "es": "URL_DIRECTA_DEL_VIDEO_EN_ESPAÑOL_EP2.mp4",
              "en": "URL_DIRECTA_DEL_VIDEO_EN_INGLES_EP2.mp4",
              "sub": "URL_DIRECTA_DEL_VIDEO_SUBTITULADO_EP2.mp4"
            }
          }
          // ... más episodios de la temporada 1
        ]
      },
      {
        season: 2,
        episodes: [
          {
            episode: 1,
            title: "El Regreso",
            languages: {
              "es": "URL_DIRECTA_DEL_VIDEO_EN_ESPAÑOL_T2_EP1.mp4",
              "en": "URL_DIRECTA_DEL_VIDEO_EN_INGLES_T2_EP1.mp4",
              "sub": "URL_DIRECTA_DEL_VIDEO_SUBTITULADO_T2_EP1.mp4"
            }
          }
          // ... más episodios de la temporada 2
        ]
      }
      // ... más temporadas
    ]
  },
  // ... más series aquí, con la misma estructura
];
