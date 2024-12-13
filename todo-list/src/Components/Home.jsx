import { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import {FaCheckCircle, FaCircle, FaCircleNotch, FaDotCircle, FaRegCircle, FaTrash } from 'react-icons/fa';


const Home = () => {
    const [todos , setTodos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/get')
        .then(result => setTodos(result.data) )
        .catch(err => console.log(err))
   
    },[])

    const handleEdit = (id) => {
        
        axios.put('http://localhost:3000/update/'+id)
        .then(result => {
            location.reload()
        } )
        .catch(err => console.log(err))



    }

    const onDeleteTodo = (id) => {
        console.log(id)
        axios.delete('http://localhost:3000/delete/'+id)
        .then(result => {
            location.reload()
        } )
        .catch(err => console.log(err))

    }
        return (
            <div className="flex justify-center">
                <div className="p-4  shadow-lg m-6">
                <h1 className="text-center font-bold text-blue-600 text-4xl m-3">Todo List</h1>
                <Create />               
                {todos?.length === 0 
                ?

                 <div className="font-bold text-center">No Records Found</div> : 
                    todos?.map((todo) => {
                        return(
                        <div className=" border-black border-2 p-2 m-2 flex flex-row justify-between" key={todo.id}>
                            <div className="flex flex-row align-middle" onClick={() => handleEdit(todo._id)}>
                                {todo.done? <FaCheckCircle className="mt-1 mr-2" /> :  <FaRegCircle  className="mt-1 mr-2"/>}
                           
                            <p  className={todo.done? "line-through" : ""}> {todo.task} </p>
                            </div>
                            <FaTrash  onClick={() => onDeleteTodo(todo._id)}/>
                        </div>
                        )
                    })
            }
                </div>
            </div>
        );
}

export default Home;