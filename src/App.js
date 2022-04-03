import React,{useState} from 'react';
import './App.css';
import Cred from './component/credentials';
import Home from './component/home';
import Links from './component/links';
import Navigation from './component/navigation';
import Project from './component/projects';


function App() {

  let[im,setIm] = useState(0);
  return (
   <div className = 'apps' style = {{overflowX:'hidden'}} >
     <Navigation/>
     <Home/>

  
        <Cred/> 
       
     <Project/>
     <Links/>

   </div>
  );
}

export default App;
