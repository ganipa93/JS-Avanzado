
const ampliarProductos = document.querySelector("#ampliarProductos")

//const productos = document.querySelector('#productos').children //Array
const productos = document.querySelectorAll('#productos a.producto') //NodeList

productos.forEach( (producto, index, productosLocal)=>{

	producto.addEventListener("click", ev => {
		ev.preventDefault()

		// #ampliarProductos -----------------------------
		//Vuelvo el contenido del a.producto en section#ampliarProducto
		ampliarProductos.innerHTML = '<a class="close">X</a>'+producto.innerHTML
		//Agregar la clase .active al section#ampliarProducto para que se visualice
		ampliarProductos.classList.add('active')


		//Ev Close -------------------------------------
		ampliarProductos.querySelector("a.close").addEventListener('click', ev => {
			ampliarProductos.classList.remove('active')
			producto.classList.remove('active')
		})


		// a.productos ----------------------------------
		//Quitar la clase .active a todos los a.producto
		productosLocal.forEach( producto =>{ 
			producto.classList.remove('active') 
		} )
		//Añadir la clase .active al a.producto que recibio el click
		producto.classList.add("active")
	} )

} )




