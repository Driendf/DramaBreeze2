// Crear el array global si no existe todavía
window.dataCatalogo = window.dataCatalogo || [];

// Agregar el contenido de este archivo
window.dataCatalogo.push(...[
  {
    title: "One Piece",
    category: "anime",
    img: "https://i.ibb.co/vHJwc0y/onepiece.jpg",
    tags: ["Acción", "Aventura"]
  },
  {
    title: "Naruto",
    category: "anime",
    img: "https://i.ibb.co/xmFh7j3/naruto.jpg",
    tags: ["Acción", "Ninja"]
  }
]);
