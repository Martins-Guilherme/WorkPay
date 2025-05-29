function horasTrabalhadas(horas, minutos, valorPagoHora) {
  horas = Number(horas);
  minutos = Number(minutos);
  valorPagoHora = Number(valorPagoHora);

  let totalPagoHora = horas * valorPagoHora + minutos * (valorPagoHora / 60);
  totalPagoHora = Number(totalPagoHora.toFixed(2));

  while (minutos >= 60) {
    horas += 1;
    minutos -= 60;
  }
  return { horas, minutos, totalPagoHora, valorPagoHora };
}

const frm = document.querySelector("form");
const resp = document.querySelector("#resultado");

frm.addEventListener("submit", (event) => {
  const horas = Number(frm.horas.value);
  const minutos = Number(frm.minutos.value);
  const valorHora = Number(frm.valorHora.value);

  const valor = horasTrabalhadas(horas, minutos, valorHora);
  resp.innerHTML = `
  Totalizando : ${valor.horas > 1 ? `${valor.horas} horas` : `${valor.horas} hora`} e ${valor.minutos > 1 ? `${valor.minutos} minutos` : `${valor.minutos} minuto`}<br>Valor pago por hora: R$ ${valor.valorPagoHora.toFixed(2)}<br>Valor total a ser pago: R$ ${valor.totalPagoHora}
  `
    
  event.preventDefault();
});

frm.addEventListener('reset', () => {
  resp.innerHTML = '';
})