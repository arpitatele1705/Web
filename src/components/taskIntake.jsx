import React from 'react'

const taskIntake = () => {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-white">Task Manager</h1>
            <div className="flex flex-col gap-4">
                <input type="text" placeholder="Task" />
                <input type="text" placeholder="Description" />
                <button>Add Task</button>
            </div>
        </div>
    )
}

export default taskIntake