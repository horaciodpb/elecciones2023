const circuitoSelect = document.getElementById('circuito');
const mesaSelect = document.getElementById('mesa');

const mesasPorCircuito = {
    '107': {inicio: 3504, fin: 3554},
    '107A': {inicio: 3555, fin: 3596},
    '107B': {inicio: 3597, fin: 3663},
    '107C': {inicio: 3664, fin: 3756},
    '108': {inicio: 3757, fin: 3780},
    '109': {inicio: 3781, fin: 3788},
    '110': {inicio: 3789, fin: 3815},
    '111': {inicio: 3816, fin: 3832},
    '112': {inicio: 3833, fin: 3856},
    '113': {inicio: 3857, fin: 3866},
    '114': {inicio: 3867, fin: 3871},
    '115': {inicio: 3872, fin: 3879},
    '116': {inicio: 3880, fin: 3884},
    '117': {inicio: 3885, fin: 3895},
    '117A': {inicio: 3896, fin: 3898},
    '118': {inicio: 3899, fin: 3902},
    '119': {inicio: 3903, fin: 3904},
    '120': {inicio: 3905, fin: 3916},
    '121': {inicio: 3917, fin: 3929},
    '122': {inicio: 3930, fin: 3932},
    '123': {inicio: 3933, fin: 3933},
    '124': {inicio: 3934, fin: 3935}
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
