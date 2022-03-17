const tarjeta = document.querySelector('#tarjeta')
	  btnAbrirFormulario = document.querySelector('#btn-abrir-formulario')
	  formulario = document.querySelector('#formulario-tarjeta')
	  numeroTarjeta = document.querySelector('#tarjeta .numero')
	  nombreTarjeta = document.querySelector('#tarjeta .nombre')


// * Volteamos la tarjeta para mostrar el frente.
const mostrarFrente = () => {
	if(tarjeta.classList.contains('active')){
		tarjeta.classList.remove('active');
	}
}

// * Rotacion de la tarjeta
tarjeta.addEventListener('click', () => {
	tarjeta.classList.toggle('active');
});

// * Boton de abrir formulario
btnAbrirFormulario.addEventListener('click', () => {
	btnAbrirFormulario.classList.toggle('active');
	formulario.classList.toggle('active');
});

