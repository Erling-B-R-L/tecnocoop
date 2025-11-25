document.addEventListener('DOMContentLoaded', () => {
  const buscar = document.getElementById('buscar-vendedor');
  const lista = document.getElementById('lista-vendedores');
  const resena = document.getElementById('resena');

  // Diccionario de reseñas
  const reseñas = {
    juan: "Juan Pérez — Muebles Juan. Especialista en muebles de madera reciclada, ofreciendo mesas y estanterías sustentables.",
    maria: "María López — Artesanías López. Artesana local que crea piezas decorativas y utilitarias con materiales naturales.",
    carlos: "Carlos Rodríguez — Textiles Rodríguez. Ropa y textiles hechos a mano con telas tradicionales y diseños modernos.",
    ana: "Ana Martínez — Dulces Martínez. Dulces típicos nicaragüenses elaborados artesanalmente: cajetas, rosquillas y caramelos.",
    jose: "José Hernández — Taller Hernández. Reparación y fabricación de herramientas, además de productos metálicos reutilizados.",
    lucia: "Lucía Gómez — Moda Gómez. Diseños de ropa moderna con identidad local y materiales sostenibles.",
    pedro: "Pedro Sánchez — Construcciones Sánchez. Servicios de construcción y venta de materiales reutilizables.",
    rosa: "Rosa Castillo — Floristería Castillo. Ramos y arreglos florales frescos y artesanales.",
    manuel: "Manuel Torres — Panadería Torres. Panes y repostería tradicional elaborados con recetas familiares.",
    elena: "Elena Vargas — Joyería Vargas. Joyas artesanales hechas a mano con metales y piedras locales.",
    francisco: "Francisco Díaz — Café Díaz. Café orgánico cultivado en la región y tostado artesanalmente.",
    patricia: "Patricia Morales — Librería Morales. Venta de libros nuevos y usados, apoyo a autores locales.",
    andres: "Andrés Ramírez — Zapatería Ramírez. Calzado artesanal de cuero y textiles.",
    gabriela: "Gabriela Fernández — Cosméticos Fernández. Cosméticos naturales hechos con ingredientes locales.",
    ricardo: "Ricardo Ortega — Ferretería Ortega. Herramientas, materiales de construcción y asesoría técnica.",
    sofia: "Sofía Navarro — Boutique Navarro. Ropa y accesorios exclusivos para todas las edades.",
    diego: "Diego Cruz — Electrónica Cruz. Venta y reparación de equipos electrónicos y accesorios.",
    laura: "Laura Méndez — Pastelería Méndez. Pasteles y postres artesanales para toda ocasión.",
    antonio: "Antonio Herrera — Taller Herrera. Carpintería y trabajos personalizados en madera."
  };

  // Filtrar lista mientras se escribe
  buscar.addEventListener('keyup', () => {
    const filtro = buscar.value.toLowerCase();
    Array.from(lista.getElementsByTagName('li')).forEach(li => {
      const texto = li.textContent.toLowerCase();
      li.style.display = texto.includes(filtro) ? "" : "none";
    });
  });

  // Mostrar reseña al hacer clic
  lista.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      const id = e.target.getAttribute('data-id');
      if (reseñas[id]) {
        resena.textContent = reseñas[id];
        resena.style.display = "block";
      }
    }
  });
});