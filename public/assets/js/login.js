// Referencias del HTML
const mostrarVentana = document.querySelector('.link-access');
const cerrarVentana = document.querySelector('.cerrar-form');
const mostrarTipoRegistro = document.querySelector('#tipo-registro');
const regresarLogin = document.querySelector('.regresar-login');
const cerrarTipo = document.querySelector('.cerrar-ventana-tipo');
const mostrarFormProv = document.querySelector('#form-reg-prove');

// Funcion para mostrar ventana de login
const abrirLogin = () =>{
   const form = document.getElementById('login-form');
   form.style.display = "block";
}
// Funcion para cerra ventana de login
 const cerrarLogin = () =>{
    const form = document.getElementById('login-form');
    form.style.display = "none";
     }
// Funcion para mostrar ventana de tipo de registro
const abrirTipoRegistro = () =>{
    const form = document.getElementById('tipo-conten');
    form.style.display = "block";
 }
// Funcion para cerra ventana de tipo de registro
const cerrarTipoRegistro = () =>{
    const form = document.getElementById('tipo-conten');
    form.style.display = "none";
     }

const abrirFormularioProveedor = () =>{
    const form = document.getElementById('div-form-proveedor');
    form.style.display = "block";
     }

     function reservarServico(){
         
     }

// Evento para mostrar formulario Login por click

mostrarVentana.addEventListener('click', (e) =>{
    e.preventDefault();
    abrirLogin();
});

// Evento para cerrar el formulario Login por click
cerrarVentana.addEventListener('click', () =>{
    cerrarLogin();  
});

// Evento para regresar la ventana tipo de registro
regresarLogin.addEventListener('click', (e) => {
    e.preventDefault();
    abrirLogin();
    cerrarTipoRegistro();
});
// Evento para mostrar a la ventana tipo de registro
mostrarTipoRegistro.addEventListener('click', () => {
    abrirTipoRegistro();
    cerrarLogin();  
});
// Evento para cerrar la ventana tipo de registro
cerrarTipo.addEventListener('click', () => {
    cerrarTipoRegistro();
});

// Evento para abrir el formulario de registro proveedor
mostrarFormProv.addEventListener('click', () => {
    abrirFormularioProveedor();
    cerrarTipoRegistro();
});

const fecha = new Date();
console.log(fecha);