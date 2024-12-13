import { useState } from "react";
import axios from 'axios'


const Create = () =>  {
    const [task , setTask] = useState()

    const handleAdd = () => {
        axios.post("http://localhost:3000/add" , {task : task})
        .then(result => {location.reload()})
        .then(err => console.log(err.message))

    }

    return (
        <div>
            <form className="m-4 p-4">
                <input className="bg-slate-100 p-2 " id="" name="" type="text" placeholder="Enter Your Tast" onChange={(e) => setTask(e.target.value)}/>
                <button className="p-2  bg-blue-400 text-white rounded-lg font-bold" onClick={handleAdd}>Add</button>
            </form>
            
        </div>
    );
}

export default Create;