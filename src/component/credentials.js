import React,{useState,useEffect} from 'react';
import './cred.css';
import {useInView} from 'react-intersection-observer';
import {useAnimation} from 'framer-motion';
import { motion } from 'framer-motion';
import python from '../images/py.png';
import mern from '../images/mern.png';
import figma from '../images/fi.png';
import js from '../images/js.png';
import Resume from './resume';

const Cred = ({change}) =>{

    let [open,setOpen] = useState(false);
    let {ref, inView} = useInView();
    let anime = useAnimation();
     let animation = useAnimation();
    useEffect(()=>{
        if(inView){
         
           anime.start({
            x : 0,
            opacity:1,
                
                 transition : {
                  delay:.5,
                  duration : 2,
                  type : 'spring',
                  bounce : .4
                 }
        
           })

           animation.start({
               opacity : 1,

               transition : {
                delay : 1,duration:1
               }
           })
           }
           else{
            anime.start({
             
               x: '-30rem',
               opacity:0
            })
            animation.start({
                opacity :0
            })
           }
        
        
        },[inView]);

    return(
     
        <div id = 'credentials' 
        className = ' flex items-center justify-center' style = {{height : '100vh',width :'100%',backgroundColor:'#FFC0CB',position:'relative'}} >
            <div>
            <div class="custom-shape-divider-top-1638806308">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
    </svg>
</div>
        <motion.div ref = {ref} animate = {anime}
         style = {{border : '8px solid #342c3c',borderRadius:'20px',padding : '40px',position : 'relative',overflow:'hidden',boxShadow: 'rgba(0, 0, 0, 0.5) 0px 10px 15px'}} >
             <motion.div animate = {animation} >
             <h2 className  = 'xl:text-5xl sm:text-5xl ' style = {{color:'black'}} >
          I am a software engineering<br/>
        student and a fullstack <br/>
       web and blockchain<br/> developer<br/>
         from Nepal.  
          </h2>

          <button className = '  text-black hover:bg-black hover:text-white ' 
          onClick = {()=>setOpen(true)}
          style = {{padding:'5px 40px', border : '4px solid black', marginTop:'30px',fontSize:'30px',borderRadius : '40px',transition:'500ms ease-in'}}
           >See My Resume</button>

           <img className = 'python' src = {python} />
           <img className = 'mern' src = {mern} />
           <img className = 'figma' src = {figma} />
           <img className = 'mern1' src = {js} />
             </motion.div>

          </motion.div>
        </div>
       <Resume open = {open} close = {()=>setOpen(false)} />
         
       


         </div>
     
    )
}

export default Cred;