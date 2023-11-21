import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [toDos,setTodos] = useState([])
  const [toDo,setToDo] =useState('')
  const [update,setUpdate]=useState('')
  const edit = (id)=>{
   setTodos( toDos.map((obj)=>{
      if(obj.id === id){
         obj.text = update;
        obj.isEdit = false;
      }
      return obj;
    }))
  }
  return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Whoop, it's Wednesday   </h2>
    </div>
    <div className="input">
    
      <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
      <i onClick={()=>{setTodos([...toDos,{ id:Date.now(),text:toDo,status:false,isEdit:false}])
    console.log(toDos);
    setToDo('')  
    }
    } className="fas fa-plus"></i>
    </div>
    <div className="todos">
      { toDos.map((obj)=>{
      return(
      <div className={!obj.isEdit?'todo':''}>
        
        {obj.isEdit?
        <>
       <div className="input">
       {/* onChange={(e)=>setToDo(e.target.value)} */}
      {/* <input value={obj.text}  type="text" placeholder="🖊️ Add item..." /> */}
      {/* <i onClick={()=>setTodos([...toDos,{ id:Date.now(),text:toDo,status:false,isEdit:false}])} className="fas fa-plus"></i> */}
      <input onChange={(e)=>{
        setUpdate(e.target.value)
      }}  placeholder='Update the List' type="text"  />
      <i onClick={(e)=>{
        console.log(update);
        edit(obj.id)
      }} className="fas fa-plus"></i> 
      
      
    </div>
        </>:<>

        
          <div className="left">
          <input onChange={(e)=>{
              console.log(e.target.checked);
              console.log(obj);
              setTodos(toDos.filter(obj2=>{
                if(obj2.id === obj.id){
                  obj2.status = e.target.checked
                }
                return obj2;
              } ))
          }} value={obj.status} type="checkbox" name="" id="" />
          
            <p>{obj.text} </p>  
        </div>

        <div className="right">
          {/* <i className="fas fa-times"></i> */}
          
          <i class="fas fa-edit" onClick={(e)=>{
            setTodos(toDos.filter(obj2=>{
              if(obj2.id === obj.id){
                obj2.isEdit = true;
              }
              return obj2
            }))
          }}></i>

          <i class="fa fa-trash" onClick={(e)=>{
            setTodos(toDos.filter(obj2=>{
              if(obj2.id !== obj.id) 
              return obj2;
            }))
          }}  ></i>
          
        
            </div>
        
        </>}
        
      </div>) 
    })}

    {toDos.map((obj)=>{
      if(obj.status){
        return(<h1>{obj.text} </h1>)
      }
      return null
    })}
    </div>
  </div>
  );
}

export default App;
