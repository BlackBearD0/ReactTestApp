import React, { useEffect, useRef, useState } from 'react'

var id = 2

const Form = ({onAdd}) => {
    const [taskNameToAdd, setTaskNameToAdd] = useState('')
    
    const inputRef = useRef()

    const addTask = (e) => {
        e.preventDefault()
        id += 1
        console.log(id)
        onAdd({id: id, name: taskNameToAdd})
        inputRef.current.value = ''
    }
    

    useEffect(() => console.log(taskNameToAdd), [taskNameToAdd])
    
    return (
        <div>
            <form onSubmit={(e) => addTask(e)}>
                <input ref={inputRef} required onChange={(e) => setTaskNameToAdd(e.target.value)} type='text' />
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default Form