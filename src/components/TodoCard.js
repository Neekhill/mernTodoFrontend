import React from 'react';
import { BiEdit, BiTrash } from 'react-icons/bi';


function TodoCard({ index, title, desc, id, delTodo }) {

    const colors = [
        {
            primaryColor: "#5D93E1",
            secondaryColor: "#ECF3FC"
        },
        {
            primaryColor: "#F9D288",
            secondaryColor: "#FEFAF1"
        },
        {
            primaryColor: "#5DC250",
            secondaryColor: "#F2FAF1"
        },
        {
            primaryColor: "#F48687",
            secondaryColor: "#FDF1F1"
        },
        {
            primaryColor: "#B964F7",
            secondaryColor: "#F3F0FD"
        }
    ]

    return (
        <div className="max-w-lg border-t-4 text-gray-700 shadow p-5" style={{ "borderColor": colors[index % 5].primaryColor }} >
            <span className="px-6 py-1 rounded text-lg" style={{ "background-color": colors[index % 5].secondaryColor }} >{title}</span><br></br>
            <p className="mt-5">{desc}</p>
            <p>{id}</p>
            <div className="flex justify-end justify-items-end mt-5 ">
                <BiEdit size={36} style={{ "color": colors[index % 5].primaryColor, "cursor": "pointer" }} className="px-2 " />
                <BiTrash size={36} style={{ "color": colors[index % 5].primaryColor, "cursor": "pointer" }} className="px-2"
                    onClick={() => { delTodo(id) }}
                />
            </div>
        </div>
    )
}

export default TodoCard
