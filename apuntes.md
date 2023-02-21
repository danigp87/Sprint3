    array.push([1, 2, 3]) introduce ese array dentro de otro array: [[a, b, c], [1, 2, 3]]
push: introduce al final
unshift: introduce al principio (contrario al push)
pop: borra el último
shift: borra el primero

myDog.name = Buda
    si existe name, lo cambia por Buda; si no existe, lo crea y le pone Buda
    delete myDog.name borra el campo name

let gloveBoxContents = myStorage.car.inside["glove box"];
    cada uno está dentro del otro, con los puntos y luego corchetes y comillas porque son 2 palabras separadas

updateInfo(id, prop, value) pilla el id que le decimos, va al parametro que tenemos en prop, y añade el value que le damos al objeto

function lookUpProfile(name, prop){
  for (var i = 0; i < contacts.length; i++) {
    if(contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";
    }
  }
  return "No such contact";
}

