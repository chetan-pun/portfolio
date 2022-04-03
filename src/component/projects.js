import React,{useEffect,useState} from 'react';
import './project.css';
import './cred.css';
import pic1 from '../PowerHouse/1.png';
import pic2 from '../PowerHouse/2.png';
import pic3 from '../PowerHouse/3.png';
import pic4 from '../PowerHouse/4.png';
import pic5 from '../PowerHouse/5.png';
import left from '../images/left.png';
import right from '../images/right.png';
import { motion } from 'framer-motion';

const Project = () =>{

    let [im,setIm] = useState(0);
    let power = [{src : pic1},
        {src : pic2},
        {src : pic3},
        {src : pic4},
        {src : pic5}
    ];

    let powerHouse = power.map((e,index)=>{
           return(
            <img className = 'featured_slider' src = {e.src} alt = '' style = {{ 
                marginLeft : index === 0 ? `-${im *100}%` : undefined
            }}  />
           )
    })

    let handleRight = () =>{
        if(im === power.length-1){
            return setIm(0);
        }
        else{
            return setIm(im+1);
        }
    }
    let handleLeft = () =>{
        if(im === 0){
            return setIm(power.length-1);
        }
        else{
            return setIm(im-1);
        }
    }


useEffect(()=>{

    let timer = setTimeout(()=>{
          if(im===power.length -1) return setIm(0);
          return setIm(im+1);
    },3000)
   
    return () => clearTimeout(timer)

},[im])


    return(
        <div id = 'projects' style = {{height:'100vh',backgroundColor :'#FFC0CB',position:'relative'}}  >
          
         <p className = 'text-6xl text-center  p-20 project'>My Projects</p>
     
         <div className = 'flex justify-center items-center ' >

   
         <motion.img className = 'w-20 h-20 icons ' whileHover = {{scale:1.3}} onClick = {handleLeft}  src = {left} alt = ''/>
         

         <div className = 'project_slider' >
            {powerHouse}

            <div
            className = 'projects_details' >
                <h3 className = '2xl:text-5xl  md:text-4xl xl:text-5xl text-3xl text-white ' >Power House Resort</h3>
                <br/>
                <p className = 'text-lg text-white ' >Build this website for Power House Resort</p>
                <p className = 'text-lg text-white ' >Using React JS in frontend and firebase for database</p>
                <p></p>
            </div>

         </div>
         <motion.img className = 'w-20 h-20 icons' onClick = {handleRight} whileHover = {{scale:1.3}} src = {right} alt = ''/>
         </div>
        </div>
    )
}

export default Project