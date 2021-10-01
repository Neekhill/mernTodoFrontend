import React, { useState, useEffect } from 'react';
import getTodosApi from '../api/getTodosApi';
import TodoCard from './TodoCard';
import deleteTodoApi from '../api/deleteTodoApi';



function TodoList() {
    const AvailableStates = {
        NEW: 'NEW',
        LOADING: 'LOADING',
        ERROR: 'ERROR',
        SUCCESS: 'SUCCESS'
    };

    const [todoListState, setTodoListState] = useState(AvailableStates.NEW)
    const [todos, setTodos] = useState([]);


    useEffect(() => {
        setTodoListState(AvailableStates.LOADING)
        getTodosApi()
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data);
                    setTodoListState(AvailableStates.SUCCESS);
                    setTodos(response.data);
                }
                else {
                    console.log(`Error occurred ${response.status}`);
                    setTodoListState(AvailableStates.ERROR);
                }
            })
            .catch(error => {
                console.log(error);
                setTodoListState(AvailableStates.ERROR);
            });
    }, [])

    const delTodo = (id) => {
        deleteTodoApi(id)
            .then(res => {
                console.log(res);
                getTodosApi()
                    .then(response => {
                        if (response.status === 200) {
                            console.log(response.data);
                            setTodoListState(AvailableStates.SUCCESS);
                            setTodos(response.data);
                        }
                        else {
                            console.log(`Error occurred ${response.status}`);
                            setTodoListState(AvailableStates.ERROR);
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        setTodoListState(AvailableStates.ERROR);
                    });
            })
    }

    return (
        <>
            {/* <h1 className=" p-3 text-4xl text-gray-600 font-semibold text-center bg-gray-200"> Chicken Dishes</h1> */}

            <div className="container mx-auto my-10 px-5">
                <div className=" grid grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-2 md:gap-x-12 lg:grid-cols-3 ">

                    {(todoListState === "NEW" || todoListState === "LOADING") ?
                        <>

                        </> :
                        (todoListState === "Error") ?
                            <><div> Error occurred </div></> :
                            <>
                                {
                                    todos.map((todo, index) => {
                                        return <TodoCard id={todo._id} index={index} title={todo.title} desc={todo.description} delTodo={delTodo} />
                                    })
                                }
                            </>
                    }

                </div>
            </div>
        </>
    );


}

export default TodoList
