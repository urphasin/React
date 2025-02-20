var canvas = document.querySelector('canvas');

console.log(window);


canvas.width = window.innerWidth;
canvas.height = window.innerHeight

var c = canvas.getContext('2d')

c.beginPath();
c.arc(200, 200, 30, 0, Math.PI * 2, false)
c.strokeStyle = 'blue';
c.stroke();

function animate() {
    requestAnimationFrame(animate)
}
