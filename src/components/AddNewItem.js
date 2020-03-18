import React, { useState } from 'react';

function AddNewItem({ parentName, addAction }) {
  const [inputVisibility, updateInputState] = useState(false);
  const [inputValue, updateValue] = useState('');

  const addItem = () => {
    addAction(parentName, inputValue);
    updateInputState(false);
  }
  const openInput = () => updateInputState(true);
  const changeInput = (e) => updateValue(e.currentTarget.value);

  return (
    <>
      {inputVisibility ? (
        <>
          <input type="text" onChange={changeInput} />
          <button type="button" onClick={addItem}>Save</button>
        </>)
        : <button type="button" onClick={openInput}>Add new item</button>
      }
    </>
  );
}

export default AddNewItem;
