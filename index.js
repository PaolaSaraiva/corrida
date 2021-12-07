const velmaximadepedro = 230;
const velminimadepedro = 150;
const derrapagempedro = 0.03;

const velmaximadeedna = 220;
const velminimadeedna = 180;
const derrapagemedna = 0.01;

const velmaximadejuca = 260;
const velminimadejuca = 120;
const derrapagemjuca = 0.05;

const resultado = document.getElementById ("resultado")

function getVelocity(min, max) {
  return Math.random() * (max - min) + min;
}

function comecarCorrida(numeroVoltas) {
  let voltasganhaspedro = 0;
  let voltasganhasedna = 0;
  let voltasganhasjuca = 0;

  for (let i = 0; i < numeroVoltas; i++) {
    let velocidadePedro = getVelocity(velminimadepedro, velmaximadepedro);
    velocidadePedro = velocidadePedro - velocidadePedro * derrapagempedro;

    console.log(
      "Volta de Pedro nº - " +
        (i + 1) +
        " - Velocidade: " +
        parseInt(velocidadePedro)
    );

    let velocidadeedna = getVelocity(velminimadeedna, velmaximadeedna);
    velocidadeedna = velocidadeedna - velocidadeedna * derrapagemedna;

    console.log(
      "Volta de Edna nº - " +
        (i + 1) +
        " - Velocidade: " +
        parseInt(velocidadeedna)
    );

    let velocidadejuca = getVelocity(velminimadejuca, velmaximadejuca);
    velocidadejuca = velocidadejuca - velocidadejuca * derrapagemjuca;

    console.log(
      "Volta de Juca nº - " +
        (i + 1) +
        " - Velocidade: " +
        parseInt(velocidadejuca)
    );

    if (velocidadePedro > velocidadeedna && velocidadePedro > velocidadejuca) {
      voltasganhaspedro++;
    }

    if (velocidadeedna > velocidadePedro && velocidadeedna > velocidadejuca) {
      voltasganhasedna++;
    }

    if (velocidadejuca > velocidadeedna && velocidadejuca > velocidadePedro) {
      voltasganhasjuca++;
    }
  }
  if (voltasganhaspedro > voltasganhasedna && voltasganhaspedro > voltasganhasjuca) {
      console.log(
          "Pedro venceu a corrida"
      ) 
      resultado.innerHTML = "Pedro venceu a corrida"
  }
  if (voltasganhasedna > voltasganhaspedro && voltasganhasedna > voltasganhasjuca) {
    console.log(
        "Edna venceu a corrida"
    )
    resultado.innerHTML = "Edna venceu a corrida"
  }
  if (voltasganhasjuca > voltasganhasedna && voltasganhasjuca > voltasganhaspedro) {
    console.log(
        "Juca venceu a corrida"
    )
    resultado.innerHTML = "Juca venceu a corrida"
  }
}
