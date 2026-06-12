// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();
// }
// function three(){
//     let sum = two() + one();
//     console.log(sum);
// }
// three();

//CALLBACK HELL
// setTimeout(() => {
//     console.log("Step1 :- Login");
//     setTimeout(() => {
//         console.log("Step2 :- Get Profile");
//         setTimeout(() => {
//             console.log("Step3 :- Get Posts");
//             setTimeout(() => {
//                console.log("Step3 :- Get Comments");
//                }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// PROMISES
// function saveDb(data){
//     return new Promise((resolve,reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4){
//             resolve("success: data was saved");
//         }
//         else{
//             reject("failure: weak connection");
//         }
//     })
// }

// let request = saveDb("Apna College");
// request.then((result) => {
//     console.log("promises was resolved");
//     console.log(result);
//     console.log(request);
// })
// .catch((error) =>{
//     console.log("promises was rejected");
//     console.log(error);
//     console.log(request);

// })

// PROMISES CHAINING 
// saveDb("Apna College")
// .then((result) => {
//     console.log("promises1 was resolved");
//     console.log(result);
//     return saveDb("helloword");
// })
// .then((result) => {
//     console.log("promises2 was resolved");
//     console.log(result);
//     return saveDb("shashi");
// })
// .then((result) => {
//     console.log("promises3 was resolved");
//     console.log(result);

// })
// .catch((error) =>{
//     console.log("promises was rejected");
//     console.log(error);
//     console.log(request);

// })
   
// sample example
// let h1 = document.querySelector('h1');
// function changecolor(color,delay){
//    return new Promise((resolve,reject) =>{
//     setTimeout(() => {
//         h1.style.color = color;
//         resolve("color changed");
//     }, delay);
//    });
// }
// changecolor('red',1000)
// .then((result) =>{
//     console.log("Color added successfuly");
//     return changecolor('green',1000)
// })
// .then((result) =>{
//     console.log("Color added successfuly");
//     return changecolor('orange',1000)
// })
// .then((result) =>{
//     console.log("Color added successfuly");
// })
// .catch((error) =>{
//     console.error(error);
// })

// ASYN FUNCTION AND AWAIT
// function changecolor(color, delay) {
//     return new Promise((resolve) => {

//         setTimeout(() => {
//             h1.style.color = color;
//             resolve();
//         }, delay);

//     });
// }

// async function demo() {
//     await changecolor("red", 1000);
//     await changecolor("green", 1000);
//     await changecolor("yellow", 1000);
//     await changecolor("blue", 1000);
// }

// demo();

// ACCESSING JSON DATA (JSON TO JS  OBJECT)
// let jsdata = '{"fact":"The average litter of kittens is between 2 - 6 kittens.","length":55}';
// let validres = JSON.parse(jsdata);
// console.log(validres);
// console.log(validres.fact);

// // JS  OBJECT TO JSON
// let student = {
//     name:"shashi",
//     age:21,
//     city: "Bengaluru"
// };

// let json = JSON.stringify(student);
// console.log(json);


// // OUR FIRST API REQUEST
// let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((res)=> {
//     console.log(res);
//     return res.json();
// })
// .then((data) => {
//     console.log(data);
//     console.log(data.fact);
// })
// .catch((err) => {
//     console.log(err);
// })

// console.log("API Calling");

// WITH ASYN AND AWAIT API CALLING
// let url = "https://catfact.ninja/fact";
// async function getFact(){
//     try{
//         let res1 = await fetch(url);
//         let data1 = await res1.json();
//         console.log("Data - 1" ,data1.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log("Data - 2" ,data2.fact);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// getFact();
// console.log("API Calling");

// USING AXIOS     
// let url = "https://catfact.ninja/fact";
// async function getFact(){
//     try{
//     let res = await axios.get(url);
//     return res.data.fact;
//     }
//     catch(err){
//         console.log(err);
//         return "No Fact found";
//     }
// }
// getFact();
// console.log("API Calling");
// let btn = document.querySelector("button");
// btn.addEventListener('click', async function(){
//     let para = document.querySelector('#result');
//     para.innerText = await getFact();
// })

// DOG API CALLING
// let url = "https://dog.ceo/api/breeds/image/random";
// async function getFact(){
//     try{
//     let res = await axios.get(url);
//     return res.data.message;
//     }
//     catch(err){
//         console.log(err);
//         return "No Fact found";
//     }
// }
// getFact();
// console.log("API Calling");
// let btn = document.querySelector("#dog");
// btn.addEventListener('click', async function(){
//     let img = document.querySelector('#image');
//     img.src = await getFact();
// })

// // SENDING HEADER  WITH API REQUEST
// let url = "https://icanhazdadjoke.com/";
// async function getJokes(){
//     try{
//         let config = {headers : {Accept: "application/json"}};
//         let res = await axios.get(url,config);
//         console.log(res.data.joke);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// getJokes();

// SAMPLE ACTIVITY  (UNIVERSITY)
let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector('#uni');
let inp = document.querySelector("input");

async function get(country){
    try{
        let res = await axios.get(url+country);
        return res.data;
    }
    catch(err){
        console.log(err);
    }
}

btn.addEventListener('click',async() =>{
    let country = inp.value;
    let all  = await get(country);
    let list = document.querySelector(".child");
    list.innerText = "";
    for(col of all){
        let li = document.createElement('li');
        li.innerText = col.name;
        list.appendChild(li);
    }
})
