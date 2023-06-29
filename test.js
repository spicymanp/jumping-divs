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

  function randomPosition(top, left) {

  }

  console.log(setRandomColor());
  console.log(setRandomColor());
  console.log(setRandomColor());
  console.log(setRandomColor());
  console.log(setRandomColor());
  console.log(setRandomColor());
  console.log(setRandomColor());