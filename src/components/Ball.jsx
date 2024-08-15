import './design.css'
import { useEffect,useState} from 'react';


const Ball=({height,moving})=>
   {
      let i=0;
      let animation;
      const mystyle = {
         transition:"all 10s ease-in"
       };
       const my = {
         bottom:height+"px"
       };
      useEffect(()=>{
         
         console.log(height);
         
         animation="all 10s ease-in";
         console.log(animation)

      },[height])

   return  <div tabIndex={1} className="Ball" onKeyDown={(e)=>moving(e)} style={my}>{height} </div>

}
export default Ball