
const api=document.getElementById("api")
console.log(api.innerText,"targeting the element by ID")

api.setAttribute("class","mainHeading")


const button=document.getElementById("btn")

// button.onclick=function(){
//     // alert("aye bhai button click hua hai")

//     fetchAPI();
// }


let inputdata=document.getElementById("task");


button.addEventListener("click",()=>{


const newElement=document.createElement("p")
newElement.innerText="dhwejhfdb fhwfjh bf rfjvrjfvrjfv j"
document.body.appendChild(newElement)
console.log(inputdata.value)
newElement.innerText=inputdata.value
document.body.appendChild(newElement)
     fetchAPI();
})



const api2=document.getElementById("api")

api2.innerHTML="<p>Hello!! kase ho</p>"
console.log(api2.innerHTML,"targeting the inner html")

const targetByClass=document.getElementsByClassName("dom")
console.log(targetByClass,"target By Class name")

const targetByTagName=document.getElementsByTagName("h1")
console.log(targetByTagName,"target By Tag name")


const element=document.querySelector(".dom")
console.log(element,"target by query selector")

const element2=document.querySelectorAll(".dom")
console.log(element2,"target by query selector")


fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    headers:{
        "content-Type":"application/json"
    }
    ,
    body:JSON.stringify({
        title:"My Post no 2",
        body:"this is all about my content part2",
        userId:2
    })
})
.then(response=>response.json())
.then(data=>console.log(data,"data fetch from api"))
.catch(err=>console.log(err,"error occur in fetching api"))



// by using async / await method

async function fetchAPI(){

 try{
      let response= await fetch("https://jsonplaceholder.typicode.com/posts",
        {
    method:"PATCH",
    headers:{
        "content-Type":"application/json"
    }
    ,
    body:JSON.stringify({
        title:"My Post no 2",
        body:"this is all about my content part2",
        userId:2
    })
}
      )
    let data= await response.json()
    console.log(data,"data coming from async/await function")
 }
 catch(err){
    console.log(err,"error occur during fetch api")
 }
}



async function fetchAPI(){

 try{
      let response= await fetch("https://jsonplaceholder.typicode.com/posts/1",
        {
    method:"DELETE",
        }
      )
    let data= await response.json()
    console.log(data,"data coming from async/await function")
 }
 catch(err){
    console.log(err,"error occur during fetch api")
 }
}
fetchAPI();
