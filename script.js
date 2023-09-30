//your JS code here. If required.
const clock = document.getElementById('clock');

function updateClock(){
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const amPm = hours >= 12 ? 'PM' : 'AM';
    const hour = (hours % 12 || 12).toString().padStart(2, '0'); // convert to twelve fomate
    const time = `${hour}:${minutes}:${seconds} ${amPm}`;
    
    
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const fullDate = `${day}/${month}/${year}`;
    
    
    clock.textContent = fullDate+", "+time
}

updateClock();

setInterval(updateClock, 1000);