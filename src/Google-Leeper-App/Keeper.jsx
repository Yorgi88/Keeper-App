import React from "react";
import { ReactDOM } from "react-dom";
import { notes } from "./notes";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Header from './Header';
import CreateArea from "./CreateArea";
import Footer from "./Footer";
// import Note from "./Note";








const NoteBasics = () => {
    // const [note, setNote] = useState([]);
  
  
    // this state created is for the new notes that we wanna render into the app
    // const AddNote = (newNote) => {
    //     // this function enables us to to pass the notes back to this main file or passing the new notes back to the app, i think
    //     // console.log(note);
    //     // console.log(newNote);
    //     // e.preventDefault();
    //     // const GiveId = uuidv4();
    //     // // const items = [];task
    //     // const NewId = {id: GiveId, newNote}
   
    //     // const UpdatedItems = [...note, NewId]
    //     // setNote(UpdatedItems);
    //     // setNewNote('');



    //     setNote((PrevNotes)=>{
    //         return (
    //             [...PrevNotes, newNote]
    //         )
            
    //     })
    //     // next, we take the array and render separate notes componenets for each of the items in the array
    // }

    // const DeleteNote = (id) => {
    //     setNote((PastNotes) => {
    //         return (
    //             PastNotes.filter((noteItems)=>{
    //                 return(
    //                     noteItems.id !== id
    //                 )
    //             })
    //         )
    //     })

    // }





    return (

        <div>
            <Header/>
            <CreateArea/>
            {/* {note.map((noteItems) => {
                
                return <Note key={uuidv4()} note={note} title={noteItems.title} content={noteItems.content} onRemove={DeleteNote}/>
            })} */}
            {/* <Note note={note} onRemove={DeleteNote}/> */}
            {/* <Note title={''} content= {''}/> */}

            
            <Footer/>
            
        </div>
    
        // <section>
        //     <h3>{count}</h3>
        //     <button type="button" className="btn" onClick={HandleClick}>click me</button>
        //     <SetData humans={humans}/>
        //     <button type="button" className="btn" onClick={ClearAll}>clear all</button>
        //     <button type="button" className="btn" onClick={ResetAll}>reset</button>
        //     {/* <article>
        //         <div>
        //         {humans.map((human)=> {
        //             const {id, name} = human
        //             console.log(human);
        //             return (
        //                 <div key={id} style={{marginTop: '5px'}}>
        //                     <h4>{name}</h4>
        //                 </div>
        //             );
        //         })}
        //         </div>
        //     </article> */}
    
           
        // </section>
    
    

    
        
    
      )
 
    // const [humans, setHumans] = useState(data)
    // const [count, setCount] = useState(0)

    // const HandleClick = () => {
    //     setCount(count +1)
    // }

    // const ClearAll = () => {
    //     setHumans([])
    // }
    // const ResetAll = () => {
    //     setHumans(data)
    // }

   
    
    
  


 
}













// NOW WE WANNA MAKE OUR PROJECTS FULLY FUNCTIONAL
//implement the add note functionality
// CREATE A CONSTANT THAT KEEPS TRACK OF THE {TITLE} AND {CONTENTS}   
//PASS THE NEW NOTE BACK TO THE APP COMPONENTS
//ADD NEW NOTE TO AN ARRAY
//TAKE ARRAY AND RENDER SEPARATE NOTES COMPONENTS IN THE ARRAY FOR EACH ITEM    
//implement the delete note functionality
//gonna use the filter function                    



export default NoteBasics;