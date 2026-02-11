const btn = document.getElementById('fortune-btn')
const result = document.getElementById('result')

const fortunes = ['大吉', '中吉', '小吉', '吉', '末吉', '凶'];

btn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * fortunes.length);

  result.textContent = fortunes[randomIndex];
  
  if (fortunes[randomIndex] === '大吉') {
    result.style.color = 'red';
  } else {
    result.style.color = '#333'
  }
});