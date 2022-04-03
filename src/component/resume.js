import React,{useEffect, useRef} from 'react';
import  ReactDOM  from 'react-dom';
import { motion } from 'framer-motion';
import './resume.css';
import closeIcon from '../images/close1.png';
import cv from '../images/cv.pdf';


const Resume = ({open,close}) =>{

let ref = useRef();

useEffect(()=>{
    let toggle = (e)=>{
       if(ref.current === null || e.target === null) return close() ;
    
           if(ref.current.contains(e.target)){
            return;
           }
           
       close();
    }
    document.getElementById('resume').addEventListener('click',toggle);

},[])

    if(!open) return null;


    return ReactDOM.createPortal(
        <>
        <div 
         className = 'p-40 resume ' >
             
          <div ref = {ref} className = 'resume_div' >
<img src = {closeIcon} style = {{width : '40px',float:'right',cursor:'pointer'}} onClick = {close} />
<br/>

<h2 className = ' font-bold text-6xl'  >Chetan Phakami Pun</h2><br/>

<h3 className = 'font-bold text-3xl'  >Software Engineer</h3><br/>

<h4 className = 'font-bold' >Address <span className = 'font-normal' > Nepal</span></h4>
<h4 className = 'font-bold' >Email <span className = 'font-normal' > chetan.6.pun@gmail.com</span></h4>
<br/>
Passionate and enthusiastic, eager to contribute to team success through hard work, attention to detail, excellent critical thinking and organizational skills.
<br/>
<br/>

<h3 className = 'font-bold text-3xl'  >Links</h3>
<hr className = 'border-2' />
<br/>
<div style = {{marginLeft : '20%'}}>
<h4 className = 'font-bold' >Linkedin : <a href = 'https://www.linkedin.com/in/chetan-pun-03a813220/' target = '_blank' className = 'font-normal text-blue-600' > chetan-pun</a></h4>
<h4 className = 'font-bold' >Github  : <a href = 'https://github.com/chetan-pun' target = '_blank' className = 'font-normal text-blue-600' >chetan-pun</a></h4>
</div>


<br/>

<h3 className = 'font-bold text-3xl'  >Skills</h3>
<hr className = 'border-2' />
<br/>

<div style = {{marginLeft : '20%'}}>
Experienced in Html ,CSS , Bootstrap, tailwind CSS , Material UI and NextUI<br/><br/>
Worked on developing web systems using Node Js for backend. <br/><br/>
Experienced in building responsive and dynamic  website using React Js,Redux and NextJs<br/><br/>
Familiar using No-SQL databases like MongoDb
</div>

<br/>

<br/>

<h3 className = 'font-bold text-3xl'  >Work history</h3>
<hr className = 'border-2' />
<br/>
2018-02 - 2019-09
<div style = {{marginLeft : '20%',marginTop : '-22px'}}>
    <h4 className = 'font-bold text-2xl'>Game Developer</h4>
    <br/>
Karela Games, Pokhara<br/><br/>
Development of Game logic and mechanics.<br/>
Worked closely with graphics developers to manipulate graphics and object in scenes using C#.<br/>
Created prototypes using design ideas.<br/>
Used social media interaction and google Ad services.
</div>


<h3 className = 'font-bold text-3xl'  >Education</h3>
<hr className = 'border-2' />
<br/>

2021-04 - current
<div style = {{marginLeft : '20%',marginTop : '-22px'}}>
    <h4 className = 'font-bold text-2xl'>Software Engineering</h4>
    <br/>
Gandaki College of Engineering and Science<br/><br/>

</div>

<br/>
<a className = 'download' href= {cv} download>Download Resume</a>
<br/>
</div>

        </div>
        </>,document.getElementById('resume')
    )
}

export default Resume;