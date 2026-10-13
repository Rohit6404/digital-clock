const clock = document.querySelector("#clock")
const dateElement = document.querySelector("#date")


function updateClock(){
    const now = new Date()
    // console.log(now)

    let hrs = now.getHours()
    // console.log(hrs)
    const mins = now.getMinutes()
    // console.log(mins)
    const secs = now.getSeconds()
    // console.log(secs)
    
    const period = hrs >= 12 ? "PM" : "AM";
    
    hrs = hrs % 12 || 12;

    const formattedHrs = String(hrs).padStart(2, "0")
    const formattedMins = String(mins).padStart(2, "0")
    const formattedSecs = String(secs).padStart(2, "0")

    clock.textContent = `${formattedHrs}:${formattedMins}:${formattedSecs} ${period}`;

    dateElement.textContent = now.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}
updateClock()

setInterval(updateClock, 1000)