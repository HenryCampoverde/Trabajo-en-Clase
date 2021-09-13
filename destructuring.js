const datos = {
    imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.revistagq.com%2Fcuidados%2Farticulo%2Fdragon-ball-entrenamiento-goku-musculos-dieta&psig=AOvVaw0NSJ2JOsRw4rDMw-tZXiNX&ust=1631580486701000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKjJup7d-vICFQAAAAAdAAAAABAD.jpg',
    correo: 'hcampoverdej@unemi.edu.ec'
}
console.log(datos)
    //forma1
const mostrarDatos = (avatar) =>
    `
        <img src=${avatar.imagen} alt=${avatar.correo}/>        
    `
    //forma2
const mostrarDatos1 = (avatar) => {
        const { imagen, correo } = avatar
        return (
            `
        <img src=${imagen} alt=${correo}/>        
        `
        )
    }
    //forma3
const mostrarDatos2 = ({ imagen: img, correo }) =>
    `
    <img src=${img} alt=${correo}/>        
    `

const $root = document.getElementById("root")
$root.innerHTML = "<h3>Destructuring</h3>"
$root.innerHTML += mostrarDatos2(datos)