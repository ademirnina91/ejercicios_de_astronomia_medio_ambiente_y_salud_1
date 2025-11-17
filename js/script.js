/* ---------- MENÚ RESPONSIVE ---------- */
function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  // en móvil queremos que sea 'flex' para que se vea como columna
  nav.style.display = (getComputedStyle(nav).display === "flex") ? "none" : "flex";
}

document.addEventListener('DOMContentLoaded', () => {

  // Obtengo nodos
  const dropdowns = document.querySelectorAll('.dropdown');
  const nav = document.querySelector('.nav-links');

  // Cerrar todas las dropdowns
  function closeAllDropdowns() {
    dropdowns.forEach(d => d.classList.remove('open'));
  }

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown') && !e.target.closest('.nav-links')) {
      closeAllDropdowns();
    }
  });

  dropdowns.forEach(drop => {
    const btn = drop.querySelector('.drop-btn');
    const submenu = drop.querySelector('.submenu');

    // Si no hay boton, saltar
    if (!btn) return;

    btn.addEventListener('click', (ev) => {
      ev.stopPropagation();
      // Alternar la clase open
      drop.classList.toggle('open');
    });

    if (submenu) {
      submenu.addEventListener('click', (ev) => {
        ev.stopPropagation();
      });

      // Añadir stopPropagation también a cada item del submenu por seguridad
      submenu.querySelectorAll('li, a, button').forEach(item => {
        item.addEventListener('click', (ev) => {
          ev.stopPropagation();
        });
      });
    }
  });
//pantallas grandes
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      // restablece el nav para escritorio (flex)
      nav.style.display = 'flex';
      closeAllDropdowns();
    } else {
      // en móvil lo escondemos por defecto
      if (getComputedStyle(nav).display !== 'flex') nav.style.display = 'none';
    }
  });

}); 

/* ---------- FUNCIÓN CAMBIAR SECCIONES ---------- */
function mostrar(id) {
  document.querySelectorAll('.seccion').forEach(s => s.style.display = 'none');
  const sec = document.getElementById(id);
  if (sec) sec.style.display = 'block';
  else console.error('Sección no encontrada:', id);
}



/* para ejemplos de Astronomía */

function calcularBrillo() {
  let m = Number(document.getElementById('mag').value);
  let r = '';

  if (m <= 0) r = 'Extremadamente brillante';
  else if (m <= 2) r = 'Muy brillante';
  else if (m <= 4) r = 'Brillante';
  else if (m <= 6) r = 'Débil';
  else r = 'No visible';

  document.getElementById('resMag').innerText = 'Resultado: ' + r;
}

/* ASTRO 2 */
let distanciasA2 = [];
function agregarDistanciaA2(){
  let d = Number(document.getElementById('distA2').value);
  distanciasA2.push(d);
  document.getElementById('listaA2').innerText = 'Datos: ' + distanciasA2.join(', ');
}

function promedioA2(){
  let suma = distanciasA2.reduce((a,b)=>a+b,0);
  let prom = suma / distanciasA2.length;
  document.getElementById('resA2').innerText = 'Promedio: ' + prom;
}

/* ASTRO 3 */
let crateresA3 = [];
function agregarCraterA3(){
  let c = Number(document.getElementById('diamA3').value);
  crateresA3.push(c);
  document.getElementById('listaA3').innerText = 'Diámetros: ' + crateresA3.join(', ');
  let count = crateresA3.filter(v=>v>50).length;
  document.getElementById('resA3').innerText = 'Cráteres grandes: ' + count;
}

/* ASTRO 4 */
function identificarA4(){
  let c = Number(document.getElementById('codA4').value);
  let t = '';

  switch(c){
    case 1: t='Estrella'; break;
    case 2: t='Planeta'; break;
    case 3: t='Cometa'; break;
    case 4: t='Asteroide'; break;
    case 5: t='Galaxia'; break;
    default: t='Código inválido';
  }
  document.getElementById('resA4').innerText = 'Resultado: ' + t;
}

/* ASTRO 5 */
let lucesA5 = [];
function agregarLuxA5(){
  let l = Number(document.getElementById('luxA5').value);
  lucesA5.push(l);
  document.getElementById('listaA5').innerText = 'Registros: ' + lucesA5.join(', ');
  let msg = (l<5)? 'Noche profunda':'Luz normal';
  document.getElementById('resA5').innerText = msg;
}

/* --- para ejemplos de SALUD --- */

function clasificarPresion(){
  let s = Number(document.getElementById('sis1').value);
  let d = Number(document.getElementById('dia1').value);

  if (s>0 && d>0){
    let clas='';
    if (s < 120 && d < 80) clas='Normal';
    else if (s >= 120 && s <= 129 && d < 80) clas='Elevada';
    else if ((s >= 130 && s <= 139) || (d >= 80 && d <= 89)) clas='HTA Grado 1';
    else if (s >= 140 || d >= 90) clas='HTA Grado 2';

    document.getElementById('resSal1').innerText = 'Clasificación: ' + clas;
  }
  else document.getElementById('resSal1').innerText = 'Error: valores > 0';
}

/* SALUD 2 */
let tempsS2 = [];
function agregarTempS2(){
  let t = Number(document.getElementById('tempS2').value);
  tempsS2.push(t);
  document.getElementById('listaS2').innerText = 'Temperaturas: ' + tempsS2.join(', ');
}

function promedioS2(){
  if (!tempsS2.length){
    document.getElementById('resS2').innerText='Sin datos';
    return;
  }
  let prom = tempsS2.reduce((a,b)=>a+b,0)/tempsS2.length;
  document.getElementById('resS2').innerText = 'Promedio: ' + prom.toFixed(2) + ' °C';
}

/* SALUD 3 */
let tempsS3 = [];
function agregarTempS3(){
  let t = Number(document.getElementById('tempS3').value);
  if (t !== 0) tempsS3.push(t);

  document.getElementById('listaS3').innerText = 'Temperaturas: ' + tempsS3.join(', ');
  let c = tempsS3.filter(v=>v>=38).length;
  document.getElementById('resS3').innerText = 'Pacientes con fiebre: ' + c;
}

/* SALUD 4 */
function triageS4(){
  let c = Number(document.getElementById('codS4').value);
  let t='';

  switch(c){
    case 1: t='Rojo'; break; case 2: t='Amarillo'; break; case 3: t='Verde'; break; case 4: t='Azul'; break; default: t='Código inválido';
  }
  document.getElementById('resS4').innerText = 'Categoría: ' + t;
}

/* SALUD 5 */
let spoList = [];
function agregarSpo5(){
  let s = Number(document.getElementById('spo5').value);
  spoList.push(s);

  document.getElementById('listaS5').innerText = 'Saturaciones: ' + spoList.join(', ');
  document.getElementById('resS5').innerText = (s < 90 ? 'ALERTA: Saturación baja' : 'Saturación OK');
}

/* --- para ejemplos de MEDIO AMBIENTE --- */

function clasificarAQI(){
  let a = Number(document.getElementById('aqi1').value);
  let c='';

  if (a<=50) c='Buena';
  else if (a<=100) c='Moderada';
  else if (a<=150) c='Dañina para grupos sensibles';
  else if (a<=200) c='Dañina para la salud';
  else if (a<=300) c='Muy dañina';
  else c='Peligrosa';

  document.getElementById('resM1').innerText = 'AQI: ' + c;
}

/* MEDIO 2 */
let noises = [];
function agregarNoise2(){
  let n = Number(document.getElementById('noise2').value);
  noises.push(n);
  document.getElementById('listaM2').innerText = 'Mediciones: ' + noises.join(', ');
}

function promedioNoise2(){
  if (!noises.length){
    document.getElementById('resM2').innerText='Sin datos';
    return;
  }
  let prom = noises.reduce((a,b)=>a+b,0)/noises.length;
  document.getElementById('resM2').innerText = 'Promedio: ' + prom.toFixed(2) + ' dB';
}

/* MEDIO 3 */
let tempsM3 = [];
function agregarTempM3(){
  let t = Number(document.getElementById('tempM3').value);
  if (t !== 0) tempsM3.push(t);

  document.getElementById('listaM3').innerText = 'Temperaturas: ' + tempsM3.join(', ');
  let c = tempsM3.filter(v=>v>45).length;
  document.getElementById('resM3').innerText = 'Focos de calor: ' + c;
}

/* MEDIO 4 */
function residuoM4(){
  let c = Number(document.getElementById('codM4').value);
  let r='';

  switch(c){
    case 1: r='Orgánico'; break;
    case 2: r='Plástico'; break;
    case 3: r='Papel/Cartón'; break;
    case 4: r='Vidrio'; break;
    default: r='Código inválido';
  }
  document.getElementById('resM4').innerText = 'Residuo: ' + r;
}

/* MEDIO 5 */
let niveles = [];
function agregarNivel5(){
  let n = Number(document.getElementById('nivel5').value);
  niveles.push(n);

  document.getElementById('listaM5').innerText = 'Niveles: ' + niveles.join(', ');
  document.getElementById('resM5').innerText = (n > 3 ? 'ALERTA: nivel peligroso' : 'Nivel normal');
}


