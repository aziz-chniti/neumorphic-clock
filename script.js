function UpdateTime(){
    const timeElement = document.querySelector('.digital-time')
    const date = new Date()

    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    const ampm = hours >= 12 ? 'PM' : 'AM'

    const time = `<p>${String(hours % 12 || 12).padStart(2, '0')} <i>.</i> ${String(minutes).padStart(2, '0')} <span>${ampm}</span></p>`;

    timeElement.innerHTML = time;

    const hand = document.querySelector('.hand');
    const degrees = -90 + seconds * 6;
    hand.style.transform = `translate(0, -50%) rotate(${degrees}deg)`;
    
    const dateElement = document.querySelector('.date');
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const day = date.getDate();
    const month = months[date.getMonth()];
    dateElement.innerHTML = `${day} <span>${month}</span>`
}

setInterval(UpdateTime, 1000);
UpdateTime();