function formatCurrency(value) {
  const num = Number(String(value).replace(/[^\d.]/g, '')) || 0;
  return `C$ ${num.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-tramite');
  const monto = document.getElementById('monto');
  const saldo = document.getElementById('saldo');
  const confirm = document.getElementById('confirmacion');
  const tipo = document.getElementById('tipo');

  monto.addEventListener('input', () => {
    saldo.textContent = (Number(String(monto.value).replace(/[^\d.]/g, '')) || 0).toFixed(2);
    monto.value = formatCurrency(monto.value);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!tipo.value) return alert('Selecciona un tipo de trámite');
    confirm.hidden = false;

    // Simulación de "envío" local: puedes agregar una descarga de recibo
    const data = {
      tipo: tipo.value,
      monto: saldo.textContent,
      fecha: new Date().toLocaleString(),
      referencia: Math.random().toString(36).slice(2, 10).toUpperCase()
    };
    localStorage.setItem('ultimoTramite', JSON.stringify(data));
  });
});