class Clock {
  constructor(value) {
    this.value = value;
  }
  time = () => {
    return console.log(this.value)
  }
  thisTime() {
    return console.log(this.value)
  }
}

let newClock2 = new Clock('3:00')

newClock2.thisTime()