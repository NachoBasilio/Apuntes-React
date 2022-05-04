//Las notas que tome en esta parte solo seran de las cosas que me llamen la atencion de la parte de repazo de JS
//Las backticks las puedo hacer con control + shift + u + 6 + 0  

//Desestructurar arrays es lo mismo que con los objetos solo que usa [] y respeta el orden, podemos usar , para separar los valores o indicar que nos saltamos algunos valores
const personas = ['Juan', 'Pedro', 'Maria', 'Trinidad', 'Luis', 'Jorge'];
//Imaginemos que solo quiero a Trinidad ya que es mi novia
const [, , , , , nombre] = personas;
console.log(nombre);