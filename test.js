function setRandomColor() {

    let numbers = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += numbers[Math.floor(Math.random() * 16)];
    } 
    return color;

  }

  const getMaxHeight = (targetDiv) => {
    return document.getElementById(targetDiv).clientHeight;    
  }

  const getMaxWidth = (targetDiv) => {
    return document.getElementById(targetDiv).clientWidth;    
  }

  const randomTop = (top) => {return Math.floor(Math.random() * (top + 1));}
  const randomLeft = (left) => {return Math.floor(Math.random() * (left + 1));}

  console.log("Left : ", randomLeft(100));
  console.log("Top : ", randomTop(25));
