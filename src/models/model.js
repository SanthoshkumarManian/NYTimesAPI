import axios from 'axios';

const key="0LWtZNgzXA7DLKPkYzUaz9vDQjql8nqL"

export const getStories= async(type)=>{
    try{
        const result= await axios(`https://api.nytimes.com/svc/topstories/v2/${type}.json?api-key=${key}`);
        return result.data.results;
    }catch(e){
        console.log(e);
    }
}


// export const getMovie = async(query)=>{
    
//     try{
//        const result= await axios(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${query}&api-key=${key}`);
//        return result.data.results;
//     }catch(e){
       
//         console.log(e)
//     }
// }
// export const getBook = async()=>{
        
//         try{
//             const result= await axios(`https://api.nytimes.com/svc/topstories/v2/books.json?api-key=${key}`);
//             return result.data.results;
//         }catch(e){
           
//            console.log(e)
//         }
// }

// export const getAllMovie = async()=>{
    
//     try{
//        const result= await axios(`https://api.nytimes.com/svc/topstories/v2/movies.json?api-key=${key}`);
//        return result.data.results;
//     }catch(e){
       
//         console.log(e)
//     }
// }

// export const getNews = async()=>{
    
//     try{
//         const result= await axios(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${key}`);
//         return result.data.results;
//     }catch(e){
       
//        console.log(e)
//     }
// }

// export const getSports = async()=>{
    
//     try{
//         const result= await axios(`https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=${key}`);
//         return result.data.results;
//     }catch(e){
       
//        console.log(e)
//     }
// }

// export const getScience = async()=>{
    
//     try{
//         const result= await axios(`https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${key}`);
//         return result.data.results;
//     }catch(e){
       
//        console.log(e)
//     }
// }

// export const getTravel = async()=>{
//     try{
//         const result= await axios(`https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=${key}`);
//         return result.data.results;
//     }catch(e){
       
//        console.log(e)
//     }
// }

// export const getTechnology = async()=>{
    
//     try{
//         const result= await axios(`https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${key}`);
//         return result.data.results;
//     }catch(e){
       
//        console.log(e)
//     }
// }

// export const getAutomobile = async()=>{
    
//     try{
//         const result= await axios(`https://api.nytimes.com/svc/topstories/v2/automobiles.json?api-key=${key}`);
//         return result.data.results;
//     }catch(e){
       
//        console.log(e)
//     }
// }

// export const getBuisness = async()=>{
    
//     try{
//         const result= await axios(`https://api.nytimes.com/svc/topstories/v2/business.json?api-key=${key}`);
//         return result.data.results;
//     }catch(e){
       
//        console.log(e)
//     }
// }
// export const getFood = async()=>{
    
//     try{
//         const result= await axios(`https://api.nytimes.com/svc/topstories/v2/food.json?api-key=${key}`);
//         return result.data.results;
//     }catch(e){
       
//        console.log(e)
//     }
// }
