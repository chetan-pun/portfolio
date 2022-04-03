import React,{useState,useEffect} from 'react';
import './home.css';
import { motion } from 'framer-motion';
import n from '../images/n.png'

const Home = ()=>{



let [offset,setOffset] = useState(0);
let handlingScroll =()=> setOffset(window.pageYOffset)


useEffect(()=>{
    window.addEventListener('scroll',handlingScroll);

    return ()=> window.removeEventListener('scroll',handlingScroll)

},[])



    return(
        <div id = 'home' >
        <div className = 'back' style = {{position: 'relative',height : '100vh',width :'100vw',overflow:'hidden' }} >
            <div style = {{overflow:'hidden',transform:`translateY(${offset*0.5}px)`}} >
            <motion.h1 initial = {{
                y: "200%",
                
                transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1 }
            }}
            animate = {{
                y: 0,
                
                transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.5 }
            }}
            
             className = ' flex items-end 2xl:text-9xl p-1  font-extrabold  md:text-8xl xl:text-9xl text-6xl' 
            >
             Hi,<br/>I am Chetan<span class="dot dot-1"></span>
      <span class="dot dot-2"></span>
      <span class="dot dot-3"></span>

            </motion.h1>

            </div>        
            <img style = {{position:'absolute',bottom : '-50px',objectFit:'cover',height:'90vh',width:'100vw'}} src = {n}/>
        </div>

        </div>
    )
}

export default Home;