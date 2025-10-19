import React from 'react'
import { useEffect, useState } from 'react'
import './Main.css'


function Main() {
const [first, setfirst] = useState(null)
const [first1, setfirst1] = useState(null)
const [first2, setfirst2] = useState(null)




useEffect(() => {
async function api(){
let promise= await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
let data = await promise.json();
setfirst(data.categories);
console.log(data.categories)
 
}  
api()
}, [])


function run(para){
if(para===1){
     api1()
     async function api1(){
let promise= await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
let data = await promise.json();
 console.log(data.meals)
 setfirst1(data.meals)
 setfirst(null);
 }}else if(para===2){
 api1()
     async function api1(){
let promise= await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef")
let data = await promise.json();
 console.log(data.meals)
 setfirst1(data.meals)
 setfirst(null);
 }}else if(para===3){
 api1()
     async function api1(){
let promise= await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken")
let data = await promise.json();
 console.log(data.meals)
 setfirst1(data.meals)
 setfirst(null);
 }}else if(para===4){
 api1()
     async function api1(){
let promise= await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert")
let data = await promise.json();
 console.log(data.meals)
 setfirst1(data.meals)
 setfirst(null);
 }}else if(para===5){
 api1()
     async function api1(){
let promise= await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Goat")
let data = await promise.json();
 console.log(data.meals)
 setfirst1(data.meals)
 setfirst(null);
 }}else if(para===6){
 api1()
     async function api1(){
let promise= await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb")
let data = await promise.json();
 console.log(data.meals)
 setfirst1(data.meals)
 setfirst(null);
 }}else if(para===7){
 api1()
     async function api1(){
let promise= await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Miscellaneous")
let data = await promise.json();
 console.log(data.meals)
 setfirst1(data.meals)
 setfirst(null);
 }}else if(para===8){
 api1()
     async function api1(){
let promise= await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta")
let data = await promise.json();
 console.log(data.meals)
 setfirst1(data.meals)
 setfirst(null);
 }}else if(para===9){
 api1()
     async function api1(){
let promise= await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork")
let data = await promise.json();
 console.log(data.meals)
 setfirst1(data.meals)
 setfirst(null);
 }}else if(para===10){
 api1()
     async function api1(){
let promise= await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian")
let data = await promise.json();
 console.log(data.meals)
 setfirst1(data.meals)
 setfirst(null);
 }}
     

}



function detail(i){
 api1()
     async function api1(){
let promise= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${i}`)
let data = await promise.json();
 console.log(data.meals)
  setfirst(null);
  setfirst1(null);
  setfirst2(data.meals)

 }


}
  return (
    <>
<div id='categories'><h3>Categories</h3>
    <button id='b1'onClick={()=>run(1)}>seafod</button>
<button id='b1'onClick={()=>run(2)}>Beef</button>
<button id='b1'onClick={()=>run(3)}>Chicken</button>
<button id='b1'onClick={()=>run(4)}>Dessert</button>
<button id='b1'onClick={()=>run(5)}> Goat</button>
<button id='b1'onClick={()=>run(6)}> Lamb</button>
<button id='b1'onClick={()=>run(7)}> Miscellaneous</button>
<button id='b1'onClick={()=>run(8)}> Pasta</button>
<button id='b1'onClick={()=>run(9)}> Pork</button>
<button id='b1'onClick={()=>run(10)}> Vegetarian</button>
</div>


 <div id='main'>
    {first ? (

     first.map(item => (
    <div key={item.idCategory} id='main1'>
        <div id='main2'><u>{item.strCategory}</u></div>
        <div><img style={{marginTop:'30px'}} id="maini" src={item.strCategoryThumb}></img></div>
 
     </div>
   ))
    ):(
         ""
     )}
    </div>

 <div id='main'>
    {first1 ? (

     first1.map(item => (
    <div key={item.idMeal} id='main1'>
        <div id='main2'><u>{item.idMeal}</u></div>
        <div><img id='img1' src={item.strMealThumb}></img></div>
         <div id='main3'>{item.strMeal}...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button id='see' onClick={()=>detail(item.idMeal)}>detail</button></div>

     </div>
   ))
    ):(
         ''
     )}
    </div>


 
 <div id='detail'>
    {first2 ? (

     first2.map(item => (
    <div  key={item.idMeal} id='d1'>
         <div id='div5'><img id='img1' src={item.strMealThumb} ></img></div>
         <div id='main3'>{item.strInstructions}</div>
                  <div id='main4'><h5>youtube:{item.strYoutube}</h5></div>


     </div>
   ))
    ):(
         ''
     )}
    </div>
       </>
  )
}

export default Main