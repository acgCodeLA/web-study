document.addEventListener('DOMContentLoaded', () => {
  console.log('main.js loaded');
  const bb = document.querySelectorAll('big-bang');
  if (bb.length > 0) {
    bb.forEach(el => {
      el.addEventListener('click', clickBB);
    })
  }
})

function clickBB(ev) {
  const bb = ev.target;
  bb.color = 'black';
  bb.testText = 'Clicked!';
}