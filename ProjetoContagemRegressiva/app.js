const daysElement = document.querySelector("[data-days]");
const hoursElement = document.querySelector("[data-hours]");
const minutesElement = document.querySelector("[data-minutes]");
const secondsElement = document.querySelector("[data-seconds]");

const render = (days, hours, minutes, seconds) => {
  daysElement.innerHTML = String(days).padStart("2", 0);
  hoursElement.innerHTML = String(hours).padStart("2", 0);
  minutesElement.innerHTML = String(minutes).padStart("2", 0);
  secondsElement.innerHTML = String(seconds).padStart("2", 0);
};

const countdown = () => {
  const now = new Date();
  const targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  const timeLeft = targetDate.getTime() - now.getTime();

  const days = 0;
  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  render(days, hours, minutes, seconds);
};

countdown();
setInterval(countdown, 1000);
