import React from 'react';

export const Task = ({ task, doneT, delT, ...props}) => {
  
  const ActionBtn = ({ fn, id }) => <div onClick={() => fn(id)} className="action-btn">{!task.done ? <p>v</p> : <p>x</p>}</div>;
  const realClass = 'task' + (task.done ? ' task-done' : '');

  return (
    <div className={realClass}>
      <p>{task.title}</p>
      <ActionBtn fn={!task.done ? doneT : delT} id={task.id}/>
    </div>
  );
};