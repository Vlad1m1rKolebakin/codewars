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
  
    return Object.keys(Object.fromEntries(Object.entries(conutClassName).sort((a, b) => b[1] - a[1])));
  }
  
  console.log(unicClassNameSortArr(className));
  