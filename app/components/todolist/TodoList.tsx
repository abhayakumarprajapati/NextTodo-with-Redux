'use client'


import { addTask, deleteTask, listItem, onchangeText, toggleTaskCompletion } from '@/lib/features/todos/todosSlice'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import React from 'react'
import { text } from 'stream/consumers'

const TodoList = () => {


    const { task, taskList } = useAppSelector((state) => state.todos)
    const dispatch = useAppDispatch()

    console.log('tasklist: ', taskList)
    console.log('task: ', task)



    const styles = {
        padding: "10px 20px",
        color: "red",
        backgroundColor: "grey",
        marginRight: "10px"
    }
    const updatestyles = {
        padding: "10px 20px",
        color: "green",
        backgroundColor: "grey"
    }
    const liststyles = {
        margin: "10px"
    }
    const inputStyles = {
        borderWidth: "10px",
        marginRight: "10px",
        width: "50%"
    }


    return (
        <div>
            <h1>My Todo List</h1>
            <div style={{ padding: "10px" }}>
                <input style={inputStyles} onChange={(e) => dispatch(onchangeText(e.target.value))} type="text" value={task} />
                <button onClick={() => dispatch(addTask())}>Add task</button>

            </div>

            <div>

                <ul>


                    {
                        taskList.map((item, index) => (
                            <li style={liststyles} key={index + 1}>
                                <input style={inputStyles} type="text" value={item?.task} onChange={(e) => dispatch(listItem({ id: index, data: e.target.value }))} />
                                <input style={{ marginRight: "10px" }} type="checkbox" checked={item?.isCompleted} onChange={() => dispatch(toggleTaskCompletion(index))} />
                                <button style={styles} onClick={() => dispatch(deleteTask(index))}>Delete</button>
                                <button style={updatestyles}>Update</button>
                            </li>
                        ))
                    }
                </ul>

            </div>

        </div>
    )
}

export default TodoList
