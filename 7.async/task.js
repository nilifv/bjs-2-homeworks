class AlarmClock {
    constructor() {
        this.alarmCollection = []
        this.timerId = null
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error('error text')
        }

        if (this.alarmCollection.some((item) => item.id == id)) {
            return console.error()
        }
        this.alarmCollection.push({
            id: id,
            time: time,
            callback: callback,
        })
    }

    removeClock(id) {
        if (this.alarmCollection.some((item) => item.id == id)) {
            this.alarmCollection = this.alarmCollection.filter((item) => item.id !== id)
            return true
        }
        return false
    }

    getCurrentFormattedTime() {
        let time = new Date()
        let hours = time.getHours();
        let minutes = time.getMinutes()
        return `${hours}:${minutes}`
    }

    start() {
        let checkClock = alarm => {
            if (alarm.time === this.getCurrentFormattedTime()) {
                return alarm.callback()
            }
        }

        if (this.timerId == null) {
            this.timerId == setInterval(this.alarmCollection.forEach((item) => checkClock(item)))
        }
    }

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId)
        }
    }

    printAlarms() {
        this.alarmCollection.forEach((item) => console.log(item.id + ":" + item.time))
        return
    }

    clearAlarms() {
        this.stop()
        this.alarmCollection.splice(0)
    }

}


