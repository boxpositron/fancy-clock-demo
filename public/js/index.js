const select = (element) => document.querySelector(element)


const getTime = () => {

    const currentDate = new Date()
    const hours = currentDate.getHours()
    const minutes = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()

    const timeofday = hours < 12 ? 'AM' : 'PM'

    const currentHours = hours % 12 || 12


    return {
        hours: currentHours,
        minutes: minutes,
        seconds: seconds,
        timeofday: timeofday
    }
}


const getFormattedTime = () => {

    const currentTime = getTime()

    const formatted = `
    <span class="time-hours">${currentTime.hours}</span>
    <span class="time-minutes">${currentTime.minutes}</span>
    <span class="time-seconds">${currentTime.seconds}</span>
    <span class="time-timeofday">${currentTime.timeofday}</span>
    `


    return formatted

}



const updateTime = () => {

    const timeSlot = select('.current-time')
    const currentTime = getFormattedTime()

    timeSlot.innerHTML = currentTime

}



const scheduleTimeUpdate = () => {
    setInterval(updateTime, 1000)
}



scheduleTimeUpdate()