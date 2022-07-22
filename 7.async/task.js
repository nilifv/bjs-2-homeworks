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
            return console.error('Звонок с таким ID уже существует')
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
        let time = new Date().toLocaleTimeString("ru-RU", {
            hour: "2-digit",
            minute: "2-digit"
        });

        return time
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
            this.timerId === null
        }
    }

    printAlarms() {
        this.alarmCollection.forEach((item) => console.log(item.id + ":" + item.time))
        
    }

    clearAlarms() {
        this.stop()
        this.alarmCollection = [];
    }

}


