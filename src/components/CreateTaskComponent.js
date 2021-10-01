import React, { useState } from 'react'
import Modal from './Modal';
import createTaskApi from '../api/createTaskApi'



function CreateTaskComponent({ setIsModalOpen }) {

    const AvailableStates = {
        NEW: 'NEW',
        LOADING: 'LOADING',
        ERROR: 'ERROR',
        SUCCESS: 'SUCCESS'
    };

    const [createTask, setCreateTask] = useState(AvailableStates.NEW)

    const create = ({ title, description }) => {
        console.log(`title = ${title} and  and description = ${description}`);

        setCreateTask(AvailableStates.LOADING);

        createTaskApi(title, description)
            .then(response => {
                if (response.status === 200) {
                    setCreateTask(AvailableStates.SUCCESS);
                }
                else {
                    setCreateTask(AvailableStates.ERROR);
                }
            })
            .catch((error) => {
                console.log(error);
                setCreateTask(AvailableStates.ERROR);
            })
    }

    return (
        <>
            {
                createTask === AvailableStates.NEW &&
                (
                    <Modal create={create} setIsModalOpen={setIsModalOpen} />
                )
            }
            {
                createTask === AvailableStates.LOADING && (
                    <div> Spinner </div>
                )
            }
            {
                createTask === AvailableStates.ERROR && (
                    <div> Error occurred </div>
                )
            }
            {
                createTask === AvailableStates.SUCCESS && (
                    <div> Task created successfully!! </div>
                )
            }
        </>
    )
}

export default CreateTaskComponent

