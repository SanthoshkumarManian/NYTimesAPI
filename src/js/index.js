import * as Model from '../models/model.js';
import * as View from '../views/view.js'
import {element}from '../js/base.js';

const search_input =document.querySelector('.search_input');
const card_view =document.querySelector('.result');


element.movie.addEventListener('click',()=>getStories('movies'));
element.book.addEventListener('click',()=>getStories('books'));
element.news.addEventListener('click',()=>getStories('world'));
element.sports.addEventListener('click',()=>getStories('sports'));
element.science.addEventListener('click',()=>getStories('science'));
element.travel.addEventListener('click',()=>getStories('travel'));
element.technology.addEventListener('click',()=>getStories('technology'));
element.search_button.addEventListener('click',search)
element.buisness.addEventListener('click',()=>getStories('business'));
element.food.addEventListener('click',()=>getStories('food'));
element.automobile.addEventListener('click',()=>getStories('automobiles'));

const array=[];

async function getStories(type){
    
    card_view.innerHTML=" ";

    array.length =0
    View.renderLoader(card_view);
    
    const result=await Model.getStories(type);

    View.clearLoader();

    if(result!=null){
        result.map((item)=>{
        View.searchView(item);  
        array.push(item); 
    })
    }else{
        const html=`<p style="color : red">Oops No Results found</p>`
        card_view.insertAdjacentHTML('beforeend',html);
    }
    console.log(array);
}


function search(e){
    e.preventDefault();
    const query =search_input.value;
    card_view.innerHTML="";

    array.forEach((item)=>{
            if(item.title==query) {
                View.searchView(item)
            }
    })
   
}




// async function getMovie(e){
//     e.preventDefault();
//     card_view.innerHTML="";

//     View.renderLoader(card_view);
    
//     const result=await Model.getAllMovie();
//     View.clearLoader();
//     if(result!=null){
//         result.map((item)=>{
//         View.searchView(item);  
//         array.push(item); 
//     })
//     }else{
//         const html=`<p style="color : red">Oops No Results found</p>`
//         card_view.insertAdjacentHTML('beforeend',html);
//     }
//     console.log(array);
    
// }

// async function getBooks(e){
//     e.preventDefault();

//     card_view.innerHTML="";
//     View.renderLoader(card_view);
//     const result=await Model.getBook();
//     View.clearLoader()

//     if(result!=null){
//         result.map((item)=>{
//         View.searchView(item)

//     })
//     }else{
//         const html=`<p style="color : red"> Oops No Results found</p>`
//         card_view.insertAdjacentHTML('beforeend',html);
//     }

// }

// async function getAllNews(){
// card_view.innerHTML="";
// View.renderLoader(card_view);
// const result=await Model.getNews();
// View.clearLoader()
// if(result!=null){
//     result.map((item)=>{
//      View.searchView(item)
    
// }) }else{
//     const html=`<p style="color : red"> Oops No Results found</p>`
//     card_view.insertAdjacentHTML('beforeend',html);
// }
// }

// async function getSports(){
// card_view.innerHTML="";
// View.renderLoader(card_view);
// const result=await Model.getSports();
// View.clearLoader();
// if(result!=null){
//     result.map((item)=>{
//      View.searchView(item)
// }) 
// }else{
//     const html=`<p style="color : red"> Oops No Results found</p>`
//     card_view.insertAdjacentHTML('beforeend',html);
// }
// }


// async function getScience(){
// card_view.innerHTML="";
// View.renderLoader(card_view);
// const result=await Model.getScience();
// View.clearLoader();
// if(result!=null){
//     result.map((item)=>{
//      View.searchView(item)
// })
// }else{
// const html=`<p style="color : red"> Oops No Results found</p>`
// card_view.insertAdjacentHTML('beforeend',html);
// }
// }

// async function getTravel(){

// card_view.innerHTML="";
// View.renderLoader(card_view);
// const result=await Model.getTravel();
// View.clearLoader();
// if(result!=null){
//     result.map((item)=>{
//      View.searchView(item)
// })
// }else{
// const html=`<p style="color : red">Oops No Results found</p>`
// card_view.insertAdjacentHTML('beforeend',html);
// }
// }

// async function getTechnology(){
// card_view.innerHTML="";
// View.renderLoader(card_view);
// const result=await Model.getTechnology();
// View.clearLoader();
// if(result!=null){
//     result.map((item)=>{
//      View.searchView(item)
// })
// }else{
// const html=`<p style="color : red"> Oops No Results found</p>`
// card_view.insertAdjacentHTML('beforeend',html);
// }
// }

// async function getAutomobile(){
// card_view.innerHTML="";
// View.renderLoader(card_view);
// const result=await Model.getAutomobile();
// View.clearLoader();
// if(result!=null){
//     result.map((item)=>{
//      View.searchView(item)
// })
// }else{
// const html=`<p style="color : red"> Oops No Results found</p>`
// card_view.insertAdjacentHTML('beforeend',html);
// }
// }

// async function getFood(){
// card_view.innerHTML="";
// View.renderLoader(card_view);
// const result=await Model.getFood();
// View.clearLoader();
// if(result!=null){
//     result.map((item)=>{
//      View.searchView(item)
// })
// }else{
// const html=`<p style="color : red"> Oops No Results found</p>`
// card_view.insertAdjacentHTML('beforeend',html);
// }
// }


// async function getBuisness(){
// card_view.innerHTML="";
// View.renderLoader(card_view);
// const result=await Model.getBuisness();
// View.clearLoader();
// if(result!=null){
//     result.map((item)=>{
//      View.searchView(item)
// })
// }else{
// const html=`<p style="color : red"> Oops No Results found</p>`
// card_view.insertAdjacentHTML('beforeend',html);
// }
// }
