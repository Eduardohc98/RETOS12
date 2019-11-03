// VARIABLES
const button = document.getElementById('btn')
const container = document.getElementById('container')
console.log(container)
 
// JSON
 
button.addEventListener('click' , ()=>{
  const opciones = document.getElementById('razas').value
  const requestUrl = `https://dog.ceo/api/breed/${opciones}/images/random`
  const xhr = new XMLHttpRequest();
  console.log(requestUrl)
  xhr.open('GET', requestUrl , true);
  xhr.onreadystatechange = () => {
    if(xhr.readyState === 4){
      if(xhr.status === 200){
        const dogs = JSON.parse(xhr.responseText)
        pintarDogs(dogs)
      }
    }
  }
  xhr.send();
})
 
// FUNCIONES
function pintarDogs(dogs){
  container.innerHTML+= `<img src="${dogs.message}">`
}
 
 
 
 
