import React, { useState } from 'react';
import AddNewItem from './AddNewItem';

function RecursiveList({ listData }) {
  const [list, updateList] = useState(listData);

  const addNewItem = (parentName, itemName) => {
    updateList(updateStateWithNewItem(list, parentName, itemName));
  }

  const updateStateWithNewItem = (list, parentName, itemName) => list.map((item) => {
        if (item.name === parentName) {
            item.subOptions.push({
                name: itemName,
                subOptions: [],
            })
        }

        return {
            name: item.name,
            subOptions: updateStateWithNewItem(item.subOptions, parentName, itemName)
        };
    });

  const renderNestedList = list => {
    return list.map(item => {       
        return (
            <ul key={item.name}>
                <li>{item.name} <AddNewItem parentName={item.name} addAction={addNewItem} /></li>
                {item.subOptions.length > 0 ? renderNestedList(item.subOptions) : null}
            </ul>
        );
    });
  };

  return (
    <>
      {renderNestedList(list)}
    </>
  );
}

export default RecursiveList;
