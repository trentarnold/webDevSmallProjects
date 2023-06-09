const input = document.querySelectorAll('.controls input');
function handleEvent(){
  let suffix = this.dataset.sizing||'';
  document.documentElement.style.setProperty(`--${this.name}`, this.value  + suffix);
}
input.forEach(input=>input.addEventListener('change', handleEvent));
input.forEach(input=>input.addEventListener('mousemove', handleEvent));
