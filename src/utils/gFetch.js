let products = [
    { id: '1', category: 'cursos', name: "Mantrailing", price: 39, img: 'https://dummyimage.com/300x400/000/fff', stock: 20, desc: 'El curso cuenta con la modalidad online, donde tendrás clases en vivo dos veces a la semana con una duración de 2 horas cada uno. La totalidad del curso tiene una duración de 8 semanas. Cuenta con material teorico y actividades practicas.'},
    { id: '2', category: 'cursos', name: "Venteo", price: 39, img: 'https://dummyimage.com/300x400/000/fff', stock: 20, desc: 'El curso cuenta con la modalidad online, donde tendrás clases en vivo dos veces a la semana con una duración de 2 horas cada uno. La totalidad del curso tiene una duración de 8 semanas. Cuenta con material teorico y actividades practicas.'},
    { id: '3', category: 'cursos', name: "Veterinaria", price: 39, img: 'https://dummyimage.com/300x400/000/fff', stock: 20, desc: 'El curso cuenta con la modalidad online, donde tendrás clases en vivo dos veces a la semana con una duración de 2 horas cada uno. La totalidad del curso tiene una duración de 8 semanas. Cuenta con material teorico y actividades practicas.'},
    { id: '4', category: 'cursos', name: "RH", price: 39, img: 'https://dummyimage.com/300x400/000/fff', stock: 20, desc: 'El curso cuenta con la modalidad online, donde tendrás clases en vivo dos veces a la semana con una duración de 2 horas cada uno. La totalidad del curso tiene una duración de 8 semanas. Cuenta con material teorico y actividades practicas.'},
    { id: '5', category: 'seminarios', name: "Binomio nivel: Basico", price: 79, img: 'https://dummyimage.com/300x400/000/fff', stock: 25, desc: 'El seminario se dicta de forma online. Las clases serán dictadas 3 veces a la semana con una duración de 2 horas cada clase a lo largo de 12 semanas. Se hará entrega de material teorico y activades practicas. Una vez finalizado, se encontrará habilitado para realizar el siguiente nivel.'},
    { id: '6', category: 'seminarios', name: "Binomio nivel: Medio", price: 79, img: 'https://dummyimage.com/300x400/000/fff', stock: 25, desc: 'El seminario se dicta de forma online. Las clases serán dictadas 3 veces a la semana con una duración de 2 horas cada clase a lo largo de 12 semanas. Se hará entrega de material teorico y activades practicas. Una vez finalizado, se encontrará habilitado para realizar el siguiente nivel.'},
    { id: '7', category: 'seminarios', name: "Binomio nivel: Avanzado", price: 79, img: 'https://dummyimage.com/300x400/000/fff', stock: 25, desc: 'El seminario se dicta de forma online. Las clases serán dictadas 3 veces a la semana con una duración de 2 horas cada clase a lo largo de 12 semanas. Se hará entrega de material teorico y activades practicas. Una vez finalizado, se encontrará habilitado para realizar el siguiente nivel.'},
    { id: '8', category: 'seminarios', name: "Binomio nivel: Operativo", price: 99, img: 'https://dummyimage.com/300x400/000/fff', stock: 25, desc: 'El seminario de nivel Operativo se dicta de forma semi-presencial. Contará con 2 clases semanales, cada una con duración de 2 horas y 3 instancias presenciales a lo largo de las 36 semanas que cuenta el seminario. Una vez finalizado y aprobado, se hará la entrega de diploma y obtendrá la matriculación como Guía Operativo. La matricula, cuenta con aval internacional.'},
    { id: '9', category: 'talleres', name: "Rescate con cuerdas", price: 19, img: 'https://dummyimage.com/300x400/000/fff', stock: 30, desc: 'El taller se dicta de forma online, con una duración de una semana en la cual tendran 3 clases de una hora cada una. Se entregará material teorico y al final se entregaran certificados de participación junto con actividades practicas para que pueda aplicar lo aprendido.'},
    { id: '10', category: 'talleres', name: "Primeros Auxilios", price: 19, img: 'https://dummyimage.com/300x400/000/fff', stock: 30, desc: 'El taller se dicta de forma online, con una duración de una semana en la cual tendran 3 clases de una hora cada una. Se entregará material teorico y al final se entregaran certificados de participación junto con actividades practicas para que pueda aplicar lo aprendido.'},
    { id: '11', category: 'talleres', name: "Comando de Operaciones", price: 19, img: 'https://dummyimage.com/300x400/000/fff', stock: 30, desc: 'El taller se dicta de forma online, con una duración de una semana en la cual tendran 3 clases de una hora cada una. Se entregará material teorico y al final se entregaran certificados de participación junto con actividades practicas para que pueda aplicar lo aprendido.'}
]




// res = resolved
// rej = rejected
export const gFetch = () => new Promise((res, rej) => {
    let condition = true
    if (condition) {
        setTimeout(() => {
            res(products)
        }, 1000)
    } else {
        rej('F')
    }
})
