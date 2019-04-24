var str = "ослик Иа-Иа посмотрел на виадук"; 

  function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }

alert( ucFirst(str) );