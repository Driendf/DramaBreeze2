const dataCatalogo = [
  {
    title: "Romance en Seúl",
    tags: ["Romance","Finalizado","Serie TV","Subtítulos","Coreano","HD"],
    sinopsis: "Una historia de amor entre dos jóvenes que luchan por su destino.",
    episodes: Array.from({length:26}, (_, i) => ({
      title: "Episodio " + (i + 1),
      link: `https://driendf.github.io/Seul_Ep${i + 1}.html`
    })),
    img: "https://blogger.googleusercontent.com/img/b/otra_imagen.jpg"
  },
  {
    title: "Acción Extrema",
    tags: ["Acción","Emisión","Serie TV","Doblaje","Chino","HD"],
    sinopsis: "Un agente secreto se enfrenta a peligros extremos en cada misión.",
    episodes: [
      {title: "Episodio 1", link: "https://driendf.github.io/Accion_Ep1.html"},
      {title: "Episodio 2", link: "https://driendf.github.io/Accion_Ep2.html"},
      {title: "Episodio 3", link: "https://driendf.github.io/Accion_Ep3.html"},
      {title: "Episodio 4", link: "https://driendf.github.io/Accion_Ep4.html"},
      {title: "Episodio 5", link: "https://driendf.github.io/Accion_Ep5.html"},
      {title: "Episodio 6", link: "https://driendf.github.io/Accion_Ep6.html"},
      {title: "Episodio 7", link: "https://driendf.github.io/Accion_Ep7.html"},
      {title: "Episodio 8", link: "https://driendf.github.io/Accion_Ep8.html"},
      {title: "Episodio 9", link: "https://driendf.github.io/Accion_Ep9.html"},
      {title: "Episodio 10", link: "https://driendf.github.io/Accion_Ep10.html"}
    ],
    img: "https://blogger.googleusercontent.com/img/b/otra_imagen2.jpg"
  },
  {
    title: "Misterio Nocturno",
    tags: ["Suspenso","Pausado","Serie TV","Subtítulos","EEUU","HD"],
    sinopsis: "Detectives luchan por resolver crímenes que parecen imposibles.",
    episodes: [
      {title: "Episodio 1", link: "https://driendf.github.io/Misterio_Ep1.html"},
      {title: "Episodio 2", link: "https://driendf.github.io/Misterio_Ep2.html"},
      {title: "Episodio 3", link: "https://driendf.github.io/Misterio_Ep3.html"}
    ],
    img: "https://blogger.googleusercontent.com/img/b/otra_imagen3.jpg"
  }
];
