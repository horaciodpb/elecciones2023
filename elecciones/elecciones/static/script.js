const circuitoSelect = document.getElementById('circuito');
const mesaSelect = document.getElementById('mesa');

const mesasPorCircuito = {
    '107': {inicio: 1, fin: 50},
    '107A': {inicio: 51, fin: 92},
    '107B': {inicio: 93, fin: 160},
    '107C': {inicio: 161, fin: 258},
    '108': {inicio: 259, fin: 284},
    '109': {inicio: 285, fin: 293},
    '110': {inicio: 294, fin: 325},
    '111': {inicio: 326, fin: 343},
    '112': {inicio: 344, fin: 368},
    '113': {inicio: 369, fin: 378},
    '114': {inicio: 379, fin: 383},
    '115': {inicio: 384, fin: 392},
    '116': {inicio: 393, fin: 397},
    '117': {inicio: 398, fin: 408},
    '117A': {inicio: 409, fin: 411},
    '118': {inicio: 412, fin: 415},
    '119': {inicio: 416, fin: 417},
    '120': {inicio: 418, fin: 429},
    '121': {inicio: 430, fin: 442},
    '122': {inicio: 443, fin: 445},
    '123': {inicio: 446, fin: 446},
    '124': {inicio: 447, fin: 447}
};

circuitoSelect.addEventListener('change', function() {
  const circuitoSeleccionado = circuitoSelect.value;
  const inicioMesa = mesasPorCircuito[circuitoSeleccionado].inicio;
  const finMesa = mesasPorCircuito[circuitoSeleccionado].fin;
  
  mesaSelect.innerHTML = '';
  
  for(let i = inicioMesa; i <= finMesa; i++) {
    const opcionMesa = document.createElement('option');
    opcionMesa.value = i;
    opcionMesa.text = i;
    mesaSelect.add(opcionMesa);
  }
});
