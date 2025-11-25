document.addEventListener('DOMContentLoaded', () => {
  const buscar = document.getElementById('buscar-producto');
  const filtro = document.getElementById('filtro-categoria');
  const productos = document.querySelectorAll('#lista-productos .card');

  function filtrar() {
    const texto = buscar.value.toLowerCase();
    const categoria = filtro.value;

    productos.forEach(card => {
      const contenido = card.textContent.toLowerCase();
      const cat = card.getAttribute('data-categoria');

      const coincideTexto = contenido.includes(texto);
      const coincideCategoria = categoria === "" || cat === categoria;

      card.style.display = (coincideTexto && coincideCategoria) ? "" : "none";
    });
  }

  buscar.addEventListener('keyup', filtrar);
  filtro.addEventListener('change', filtrar);
});