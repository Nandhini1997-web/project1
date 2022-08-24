import React,{useEffect,useState}from "react";
import "./App.css";
function App() {
 const[program,setProgram]=useState({});
  const[details,setDetails]=useState(false);
  //var key=false;
  const {overview, backdrop_path: picture1} = program || {};  function handlechange(){
    if(details){
      setDetails(false);
    }else setDetails(true);
  }

   useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/tt6105098?api_key=fb64a1d63cd3a4452639f83d589d4d5b&language=en-US&append_to_response=callback")
    .then(response => response.json())
    .then(data => setProgram(data))
  },[]);
 //const {belongs_to_collection}=program || {};
//const{name} = belongs_to_collection || {};

//const{name}=overview || {};
  return (<div>
      <h1>TO FETCH MOVIE DATA FROM API</h1>
      <h2>THE LION KING</h2>
     <img src={`https://image.tmdb.org/t/p/original/${picture1}`}  width="300" height="300"/>
      {details===true && <>
      <p> Tagline: The King has Returned.</p>
      <p> Release_date: 2019-07-12</p>
      <p> Spoken_languages: English</p>  
      <p> Movie based_On: Animation</p>
      <p> Character involved: Simba, Nala,  Timon and Pumbaa, Scar, Mufasa, Zazu, Rafiki, Sarabi.</p>
      <p> Movie Overview: {overview} </p></>
      }
      <br/>
     <button onClick={handlechange}>Movie Details</button>
      {console.log(details)}
 </div> 
 )
    }
  export default App;