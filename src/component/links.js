import { useState } from 'react';
import facebook from '../images/facebook.png';
import linked from '../images/linked.png';
import git from '../images/git.png';
import emailjs from 'emailjs-com';
import { addScaleCorrection, motion } from 'framer-motion';
import '../css/links.css';


const Links = ()=>{

    let [err,setErr] = useState(false);
let [email,setEmail] = useState('');
let [message,setMessage] = useState('');

let datas = {
    email,message
}


    let handleButton = (e) =>{
        e.preventDefault();
        emailjs.send('service_lq27hsd','template_8bpks6e',datas,'user_ERFQbYf1OSFxMWKVvcljX')
    .then(()=>{

      emailjs.send('service_rg32drb','template_89ro8ym',datas,'user_ERFQbYf1OSFxMWKVvcljX')
    .then(()=>{
      setErr(true);
      setEmail('');
      setMessage('');

    })
    .catch((e)=>{
        alert('Something went wrong ');

    })
    })
    .catch((e)=>{
        alert('Something happend');
    })

    }



    return(
        <div className = 'p-10 flex' style = {{height : '50vh',backgroundColor:'black ' }} id = 'contacts' >
            <div className = 'p-10 flex flex-col  '  style = {{width:'50%'}} >
            <input type = 'email' style = {{borderBottom : '1px solid white'}} onChange = {(e)=>setEmail(e.target.value)}  placeholder = 'Email' />
            <br/>
            <textarea style = {{borderBottom : '1px solid white'}} onChange = {(e)=>setMessage(e.target.value)} placeholder = 'Message' rows = '2'  />
             <motion.button whileHover ={{scale:1.1}} whileTap = {{scale : 0.8}}
              style = {{
                 border:'1px solid white',
                 color:'white',
                 padding:'10px 10px',
                 borderRadius:'20px',
                 width:'100px',
                marginTop:'20px',
                fontSize:'18px',
                float:'right'
             }} onClick = {handleButton} >Send</motion.button>
            </div>
         {
             err && 
             <div className = 'fixed flex-wrap p-5 w-40 bg-white' style = {{bottom : '20px' ,left : '40%'}} >
             <button style = {{ float:'right',position:'relative' }} onClick = {()=>setErr(false)} >X</button>
           <p>Message sent</p>
         </div>
         }

         <div style = {{width : '50%'}}>
             <h2 style = {{
                 color:'white',
                 fontSize:'50px',
                 padding:'0px 100px'

             }}  >Find me on :</h2>
             <br/>
             <div className = 'links' >
                 <a  href = 'https://github.com/chetan-pun' target = '_blank'>Git-hub</a><br/>
                
                 <a  href = 'https://www.linkedin.com/in/chetan-pun-03a813220/' target = '_blank'>Linkedin</a>
             </div>
             
         </div>


        </div>
    )
}





export default Links