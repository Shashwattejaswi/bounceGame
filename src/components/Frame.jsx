import { useState } from 'react'
import './design.css'
import Ball from './Ball'

const AllArrow=[{name:"ArrowUp",func:(setHeight,a)=>{setHeight((e)=>150);setTimeout(()=>{setHeight(a)},700)}},{name:"ArrowDown",func:()=>{return 'down'}},{name:"ArrowLeft",func:()=>{return 'left'}},{name:"ArrowRight",func:()=>{return 'right'}}]
const Frame=()=>

{
    const[height,setHeight]=useState(0);
    let moving=(e)=>
    {
        let arrow=e.code;
        let funct=AllArrow.find((ArrowBox) => {
            return ArrowBox.name==arrow;
        });
        funct.func(setHeight,0);
        
        
        
     

    }
    return(
        <div className="Frame">
            <Ball height={height} moving={moving}></Ball>
        </div>
    )
}
export default Frame;
