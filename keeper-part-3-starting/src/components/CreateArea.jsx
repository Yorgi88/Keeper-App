import React from "react";
import { useState } from "react";

function CreateArea() {
  const [toggle, setToggle] = useState(false);

  const Click = () => {
    setToggle(true)
  }

  

  
  return (
    <div>
      <form>
        {toggle? (<input name="title" placeholder="Title" />) : (null)}
        
        <textarea name="content" placeholder="Take a note..." rows={toggle? 3 : 1} onClick={Click} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
