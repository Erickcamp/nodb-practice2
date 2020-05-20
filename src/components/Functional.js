import React from 'react'

const Functional = (props) => {
    return <div>
        <input placeholder='Whats your next task?'
        />
        <button onClick={() => props.addTask()}>Add Task</button>

    </div>
}
export default Functional