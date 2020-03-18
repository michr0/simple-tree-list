import content from './content';

const flatTree = [];

const serializeData = (list, parentName = null, depth = 0) => list.map(item => {   
  flatTree.push({
    itemName: item.name,
    parentName,
    depth
  })

  return serializeData(item.subOptions, item.name, depth + 1);
});

serializeData(content);

export default flatTree;