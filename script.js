document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const colors = [
    '#3498db',
    '#e74c3c',
    '#2ecc71',
    '#f39c12',
    '#9b59b6',
    '#1abc9c',
   
  ];

  
  for (let i = 0; i < 800; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

   
    square.addEventListener('mouseover', () => {
      
      square.style.backgroundColor = getRandomColor();
    });

   
    square.addEventListener('mouseout', () => {
    
      setTimeout(() => {
        square.style.backgroundColor = '#3498db';
      }, 1000);
    });

    container.appendChild(square);
  }


  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }
});