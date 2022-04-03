import React,{useState} from 'react';
import menue from '../images/menue.png'
import './navigation.css';
import close from '../images/close1.png';

const Navigation = () =>{

let [open,setOpen] = useState(false)

    return(
        <div className = 'shadow-md p-6 text-xl flex justify-between font-medium ' 
        style = {{position:'fixed',top:0,width : '100vw',zIndex : 1000,backgroundColor : '#FFC0CB'}} >
            <a href ='#home' >Portfolio</a>
            {
                open ? <img className = 'menu' style = {{width :'25px',height:'25px'}} src = {close} alt = '' onClick = {()=>setOpen(!open)} /> :
                <img className = 'menu' style = {{width :'30px'}} src = {menue} alt = '' onClick = {()=>setOpen(!open)} />
            }

            {
                open && 
                <div className = 'slider_menu' onClick = {()=>setOpen(false)} >
                <a href = '#credentials'>Credentials</a>
                <a href = '#projects'>Projects</a>
                <a href = '#contacts'>Contacts</a>
            </div>
            }
            
            
        </div>
    )
}


export default Navigation;