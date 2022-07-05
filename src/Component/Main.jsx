import React, { useState } from "react";
import ToDoList  from "./ToDoList";
function Main() {
    const [inputList , setInputList] = useState("");
    const [Items ,setItems] = useState([]);

    const itemEvent = (event) =>{
        setInputList(event.target.value);
    } ;
    const listOfItems = () =>{
         setItems((oldItems) => {
            return[...oldItems, inputList];
         });
         setInputList("");
    }; 
    const deleteItems = (id) => {
      
     
      const newPeople = Items.filter((item, index) => index != id);
      // console.log(newPeople);
      setItems(newPeople);

      };

    return(
        <>
       <div className = "main_div">
        <div className="center_div">
        <h1>ToDo List</h1>
        <br/>
        <input type="text" placeholder="Add a Items" value={inputList} onChange={itemEvent}/>
        <button onClick={listOfItems}> + </button>
        <ol>
            
            {/* <li>{inputList}</li> */}
         {   Items.map( (itemsVal , index) => {
              return <ToDoList
               key={index}
                id={index} 
                text = {itemsVal} 
                onSelect  = {deleteItems}
              
              
              />;

            })}
            
            </ol>
        </div>
       </div>
      

       </>
    );
}
export default Main;
