import React, { useState } from 'react';

const Content = () => {
  const [isTextAreaVisible, setTextAreaVisible] = useState(false);
  const [textareaValue, setTextareaValue] = useState('');

  const toggleTextArea = () => {
    setTextAreaVisible(!isTextAreaVisible);
    setTextareaValue('');
  };

  return (
    <div className='bg-secondary d-flex flex-column justify-content-center align-items-center' style={{ height: '250px' }}>
      <button className='btn btn-primary' onClick={toggleTextArea}>
        {isTextAreaVisible ? 'Hide the text Area' : 'Show the text Area'}
      </button>
      {isTextAreaVisible && (
        <textarea
          name=''
          id=''
          cols='30'
          rows='5'
          placeholder='This is the text of textarea'
          value={textareaValue}
          onChange={(e) => setTextareaValue(e.target.value)}
        ></textarea>
      )}
    </div>
  );
};

export default Content;