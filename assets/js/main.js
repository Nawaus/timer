const Clock = () => {
  const makeSeconds = (seconds) => {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString("pt-br", {
      hour12: false,
      timeZone: "GMT",
    });
  };

  const clock = document.querySelector(".clock p");
  const start = document.querySelector(".start");
  const pause = document.querySelector(".pause");
  const restart = document.querySelector(".restart");

  let seconds = 0;
  let timer = 0;

  const startClock = () => {
    timer = setInterval(() => {
      seconds++;
      clock.innerHTML = makeSeconds(seconds);
    }, 1000);
  };

  start.addEventListener("click", () => {
    clock.classList.remove("pause-color");
    clearInterval(timer);
    startClock();
  });

  pause.addEventListener("click", () => {
    clock.classList.add("pause-color");
    clearInterval(timer);
  });

  restart.addEventListener("click", () => {
    clock.classList.remove("pause-color");
    clearInterval(timer);
    clock.innerHTML = "00:00:00";
    seconds = 0;
  });
};
Clock();
