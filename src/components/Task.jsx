import React from 'react'

export default function Task(tasks){
    return (
        <div className="d-flex p-3 gap-2 align-items-center border-bottom">
            <span style={{ textDecoration: tasks.isDone ? 'line-through' : 'none' }}>{tasks.title}</span>
            <button className="btn btn-success">Done</button>
            <button className="btn btn-danger">Delete</button>
        </div>
  )
}
