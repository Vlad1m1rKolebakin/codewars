function zebulansNightmare(functionName) {
    return functionName.replace(/_([a-z])/g, (match) => match[1].toUpperCase());
  }
  
  function snakeToCamel(str) {
    const parts = str.split("_");
  
    return parts
      .map((part, index) => {
        if (index === 0) {
          return part.toLowerCase();
        }
        return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
      })
      .join("");
  }
  
  // Пример использования
  console.log(snakeToCamel("camel_case"));
  
  console.log(zebulansNightmare("camel_case"));