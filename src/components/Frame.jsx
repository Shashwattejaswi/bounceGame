import { useState } from 'react'
import './design.css'
import Ball from './Ball'

const AllArrow=[{name:"ArrowUp",func:()=>{return 'up'}},{name:"ArrowDown",func:()=>{return 'down'}},{name:"ArrowLeft",func:()=>{return 'left'}},{name:"ArrowRight",func:()=>{return 'right'}}]
const Frame=()=>

{
    const[height,setHeight]=useState(0);
    let moving=(e)=>
    {
        let arrow=e.code;
        let funct=AllArrow.find((ArrowBox) => {
            return ArrowBox.name==arrow;
        });
        console.log(e.target);
        
        
     

    }
    return(
        <div className="Frame">
            <Ball height={height}></Ball>
        </div>
    )
}
export default Frame;
