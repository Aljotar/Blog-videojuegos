Usuario = {
    correoElectronico: "mail",
    usuario: "Alvaro",
    contraseña: "contraseña"
};



const emailInput = document.getElementById('floatingInput');
const usuarioInput = document.getElementById('floatingInput2');
const contraseñalInput = document.getElementById('floatingPassword');
const botonInput = document.getElementById('boton');
const alert = document.querySelector(".alert")

botonInput.addEventListener("click", (e) => {
    e.preventDefault();
    //const usuarioLogeo = usuarioInput.value
    if (usuarioInput.value === Usuario.usuario) {
    alert.classList.remove("d-none")    
    alert.classList.add("d-block")
    

    }




})