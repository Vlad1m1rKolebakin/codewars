let className = [
    "header",
    "menu",
    "menu-item",
    "menu-item",
    "menu-item",
    "footer",
    "menu",
    "link",
    "link",
    "link",
    "link",
  ];
  
  function unicClassNameSortArr(arr) {
    const conutClassName = arr.reduce((acc, el) => {
      acc[el] = (acc[el] || 0) + 1
      return acc;
    }, {});
  
    return Object.keys(conutClassName).sort((a, b) => conutClassName[b] - conutClassName[a]);
  }
  
  console.log(unicClassNameSortArr(className));
  