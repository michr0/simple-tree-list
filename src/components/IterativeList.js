import React from 'react';

function IterativeList({ listData }) {
  const maxDepth = Math.max.apply(Math, listData.map(item => item.depth));

  const renderOneLevelList = oneLevelList => oneLevelList.map(item => (
    <li data-parent={item.parentName}>
      {item.itemName}
      {item.depth < maxDepth ? <ul data-parent={item.parentName}></ul> : null}
    </li>
  ));

  const renderIterativeList = list => {
    const builtLiElements = [];
    
    return null;
  };

  return (
    <>
      <ul>
        {renderIterativeList(listData)}
      </ul>
    </>
  );
}

export default IterativeList;
