import { useState } from "react";
import { notes } from "./notes";
import { v4 as uuidv4 } from "uuid";
import { Delete as DeleteIcon } from "@material-ui/icons";
import { styled } from "@material-ui/core";



const Note = ({items, onRemove, checks}) => {
    const [strike, setStrike] = useState(false)
    // const Clicks = (id) => {
    //     if (strike.id !== id) {
    //         setStrike(false)
    //     }else{
    //         setStrike(true)
    //     }
    // }
   
    
    // const HandleDeleteClick = (id) => {
    //     onRemove();

    // }   



    return (
        <>
        {items.map((item)=>{
            return (
                <div key={item.id} className="note">
                <h1 onClick={()=> checks(item.id)} style={{textDecoration: item.completed? 'line-through' : 'none'}}>{item.note.title}</h1>
                <p onClick={()=> checks(item.id)} style={{textDecoration: item.completed? 'line-through' : 'none'}}>{item.note.content}</p>
                <button onClick={()=> onRemove(item.id)}>

                    <DeleteIcon/>
                </button>
            </div>
            )
        })}


        </>

 

     
       
        
      

   




        // <div>
        //     {/* <h1>This is the title</h1>
        //     <p>This is the content</p> */}- 
        //     {texts.map((text)=> {
        //         const {key, title, content} = text;
        //         return (
        //             <div key={key} className="note">
        //                 <h1>{title}</h1>
        //                 <p>{content}</p>
        //             </div>
        //         )
        //     })}       
        // </div>
    )

    //will be in a separate file


} 
export default Note