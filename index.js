     // таймер ООП!
// new CountdownTimer({
//      selector: '#timer-1',
//      targetDate: new Date('Jul 17, 2019'),
// });
// const days = Math.floor(time / (1000 * 60 * 60 * 24));
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
// const secs = Math.floor((time % (1000 * 60)) / 1000);

class CountdownTimer {
  constructor(date) {
        this.date = new Date(date).getTime();
        console.log(date);
        this.p = document.querySelector('#timer-1');
}

expirationDate() {
        console.log(this.p.textContent);
        setInterval(() => {
            // console.log("expirationDate");
            let time = this.date - this.targetDate();
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            const hours = Math.floor(time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const mins = Math.floor(time % (1000 * 60 * 60) / (1000 * 60));
            const secs = Math.floor(time % (1000 * 60) / (1000));
            this.p.textContent = `Sale to ${days}:${hours}:${mins}:${secs}`;
            if (time < 0) {
                  clearInterval(this.expirationDate);
                  this.p.textContent = `THE END`
            }
      } , 700);
  }

  targetDate() {
        return new Date().getTime();
  }

  init() {
        this.expirationDate()
  }
}
new CountdownTimer('Nov 14 2020 00:00:00').init();
