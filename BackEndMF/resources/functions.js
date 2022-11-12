// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }else{
            RegistrarUsuario();
            event.preventDefault()
        }
        form.classList.add('was-validated')
      }, false)
    })
  })()

  function RegistrarUsuario(){
    let nombre = document.querySelector("#FormControlNombres").value;
    let apellido = document.querySelector("#FormControlApellidos").value;
    let cedula = document.querySelector("#FormControlCedula").value;
    let telefono = document.querySelector("#FormControlTelefono").value;
    let correo = document.querySelector("#FormControlCorreo").value;
    let rol= document.querySelector("#FormControlRoles").value;
    // let comentarios = document.querySelector("#FormControlComentarios").value;
    alert("Usuario registrado correctamente");
    let url =`http://localhost:3000/usuarios`;
    let datos={
        nombre: nombre,
        apellido: apellido,
        cedula: cedula,
        telefono: telefono,
        correo: correo,
        rol: rol
      };
      fetch(url,{
        method: 'POST',
        body: JSON.stringify(datos),
        headers:{
            'Content-type':'application/json'
        }
      }).then(res=>res.json())
      .then(mensaje=>{
        console.log(mensaje)
      })   
         
  }