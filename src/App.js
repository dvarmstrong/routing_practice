import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route,Link, useParams}from "react-router-dom";

const Home =  props => {
  return (
    <>
    <h1>Welcome</h1>
   
    </>
  )
}

// const Welcome = props => {
//   const {number} = useParams();
//   return(
//     <>
//     <h1>This is number: {number}</h1>
//     <Link to="/Home">Home</Link>
//     </>
    
//   );
// }

const Word= props => {
  const {word, color, background} = useParams();
  return(
    <>
      {
        isNaN(word) ?
        <h1 style={{color:color, backgroundColor:background}}>This word is: {word}</h1>
        :
        <h1>This is a number: {word}</h1>
      }
      
    {/* <h1>This is a word: {word}</h1> */}
      
     
    </>
  );
}

// const Number = props => {
//   const {number} = useParams();
//   return(
//     <>
//     <h1>This is number: {number}</h1>
   
//     </>
    
//   );
// }





function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
    
     <Routes>
        <Route path ="/Home" element={<Home/>}/>
        {/* <Route path="/:number" element={<Welcome/>} /> */}
        {/* <Route path ="/:number" element={<Number/>}/> */}
        <Route path ="/:word/:color/:background" element={<Word/>}/>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
