function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (username === 'viviana' && password === '1234') {
      Swal.fire({
        icon: 'success',
        title: '¡Login exitoso!',
        showConfirmButton: false,
        timer: 1500
      });  
      
      setTimeout(function() {
        window.location.href = 'index.html';
      }, 2500);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Credenciales incorrectas',
        text: 'Inténtalo de nuevo',
        confirmButtonColor: '#c30b4e',
      });
    }
  }

  
    function visitante() {
      Swal.fire({
        title: 'Redirigiendo a Visitante...',
        icon: 'info',
        showCancelButton: false,
        showConfirmButton: false,
        timer: 2000, 
        timerProgressBar: true,
      }).then(() => {
        window.location.href = 'estacionamiento.html';
      });
    }


  function enviarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var comentario = document.getElementById('comentario').value;

    
    if (nombre === '' || apellido === '' || email === '' || telefono === '' || comentario === '') {     
      Swal.fire({
        icon: 'warning',
        title: 'Campos Incompletos',
        text: 'Todos los campos son obligatorios. Por favor, completa el formulario.',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      });
    } else {
      document.getElementById('nombre').value = '';
      document.getElementById('apellido').value = '';
      document.getElementById('email').value = '';
      document.getElementById('telefono').value = '';
      document.getElementById('comentario').value = '';

      Swal.fire({
        icon: 'success',
        title: 'Comentario Enviado',
        text: 'Tu comentario se ha enviado correctamente. ¡Gracias!',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      });
    }
  }