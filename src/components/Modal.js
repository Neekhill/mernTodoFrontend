import React from 'react'
import { useState } from 'react';

function Modal({ setIsModalOpen, create }) {
    const [task, setTask] = useState({
        title: "",
        description: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask({
            ...task,
            [name]: value
        })
        console.log(task);
    }
    return (
        <div className="w-full h-screen flex justify-center bg-gray-50 items-center">
            <div className=" p-10 text-gray-600 w-full sm:w-2/3 md:w-1/2 shadow-xl h-70% bg-white">
                <div className="flex justify-between py-2 text-2xl font-semibold">
                    <h3>Create Task</h3>
                    <button className="px-2 py-1 focus:outline-none"
                        onClick={() => setIsModalOpen(false)}
                    >X</button>
                </div>
                <hr></hr>
                <div className="mt-6">
                    <div className="font-medium">
                        <label>Task Name</label><br></br>
                        <input type="text"
                            className="w-full focus:outline-none border border-gray-300 px-4 py-3"
                            name="title"
                            value={task.title}
                            onChange={(e) => { handleChange(e); }}
                        ></input><br></br>
                    </div>

                    <div className="mt-5 mb-5 font-medium">
                        <label>Description</label><br></br>
                        <textarea rows={5}
                            className="w-full focus:outline-none  border border-gray-300 px-4 py-3"
                            name="description"
                            value={task.description}
                            onChange={(e) => { handleChange(e); }} ></textarea>
                    </div>
                </div>
                <button className="px-3 py-1 bg-blue-600 text-gray-50"
                    onClick={() => { create(task) }}
                >Create</button>
                <button className="px-3 py-1 bg-gray-400 ml-2"
                    onClick={() => setIsModalOpen(false)}
                >Cancel</button>
            </div>
        </div >

    )
}

export default Modal
