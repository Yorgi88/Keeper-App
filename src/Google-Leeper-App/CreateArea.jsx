import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Note from './Note'
import { Fab } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import {Zoom} from "@material-ui/core";
// we place the fab inside the zoom in the material 




const CreateArea = () => {
  const [note, setNote] = useState({
    title: "",
    content: ""
});

const [items, setItems] = useState([]);
const [toggle, setToggle] = useState(false);



const HandleChange = (e) => {
  // const x  = e.target.name;
  // const y = e.target.value;
  // setNote(x, y);



  setNote({...note, [e.target.name]: e.target.value});
}

const HandleClick = (e) => {
  //wenever you click on a button inside a form, the default behaviour is to refresh the page
  // so we use e.preventDefault
  // onAdd(note);
  // e.preventDefault();
  
}

const AddNote = (e) => {
  e.preventDefault();
  if (!note.content && !note.title) {
    return;
  }

  const GiveId = uuidv4();
  const NewId = {id: GiveId, note};
  const UpdatedNotes = [...items, NewId];
  setItems(UpdatedNotes);

  setNote({
    title: '',
    content: ''
  });
  // setNote('')
}

const DeleteNote = (id) => {
  setItems((PrevItems)=>{
    return (
      PrevItems.filter((item)=>{
        return (
          item.id !== id
        )
      })
    );
  });
};



const Click = () => {
  setToggle(true);

}
const Expression = () => {
  if (toggle) {
    setToggle(true)
  }else{
    setToggle(false)
  }
}

const CheckThrough = (id) => {



    const UpdatedNotes = items.map((item)=>{
      if (item.id === id) {
        return {...item, completed: !item.completed} 
        // this returns a new copy of the item
        // and we toggle the completed property, wen the item is marked as completed(true), it will
        // be changed to !item.completed(false) and vice versa
      }
      return item;
    })

    setItems(UpdatedNotes);
}








    return (
    //    <div>
    //      <form>
    //         <input type="text" id="title" name="title" placeholder="Title" value={note.title} onChange={HandleChange}/>
    //         <textarea name="content" value={note.content}  rows="3" placeholder="Take a note..."
    //         onChange={HandleChange}></textarea>
    //         <button onClick={HandleClick}>Add</button> 
    //     </form>
    //    </div>


    <div>
    <form className="create-note">
      {toggle? (<input name="title" placeholder="Title" value={note.title} onChange={HandleChange} />) : (null)}


      <textarea name="content" placeholder="Take a note..." rows={toggle? 3 : 1}  value={note.content} onChange={HandleChange}
      onClick={Click}
      />
      {/* let me explain it the way i think i understand it
     

        and we added an onClick to the textarea section. Which means when toggled or wen clicked, setToggled will be true
        so wen we click on the Take a note section which is the text area: setToggle is true

        True OR False in that manner when setToggled is true the input appears and the the column increases to three

      */}




      {/* we replaced the button with fab and the wrapped it into the zoom */}
      <Zoom in={toggle}>
      <Fab onClick={AddNote}>
        <AddIcon/>
      </Fab>
      </Zoom>
    </form>
    <Note items={items} onRemove={DeleteNote} checks={CheckThrough} />
  </div>

    )
    
}
export default CreateArea;