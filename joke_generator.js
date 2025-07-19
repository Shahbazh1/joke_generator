let url="https://official-joke-api.appspot.com/random_joke";
let btn=document.querySelector("#btn");
let joke=document.querySelector("#joke");

function show(){
 fetch(url)
.then(response=>response.json())
.then(data => {
 joke.innerText=`${data.setup} 😂 ${data.punchline}`;
})
.catch(error => {
console.log('Error:', error);    
});
}


  btn.addEventListener("click",()=>{
show();
  });