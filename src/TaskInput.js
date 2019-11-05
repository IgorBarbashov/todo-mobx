import React, { useState } from 'react';

export const TaskInput = ({ addTask }) => {
    const [text, setText] = useState('');

  return (
    <div className='task-input'>
        <input value={text} onChange={e => setText(e.target.value)}></input>
        <button onClick={() => {addTask(text); setText('')}}>ADD</button>
    </div>
  );
};