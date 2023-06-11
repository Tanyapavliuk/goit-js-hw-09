import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import "flatpickr/dist/flatpickr.min.css";

//-------- змінні -------//
let differenceInTime = null; // змінна для різниці часу

let selectTime = null; // змінна для обраного часу

let arreyTimes;

// об'єкт налаштування для flatpickr (в методі onClose логіка роботи +  selectedDates ( маисив обраних дат))
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      if (selectedDates[0] - Date.now() < 0) {
          refs.buttonStart.disabled = true;
          Notiflix.Notify.failure("Please choose a date in the future");
          return;
      };
      refs.buttonStart.disabled = false;
      
      refs.buttonStart.addEventListener("click", onClickStart);
      arreyTimes = selectedDates;
  },
};

//-------- посилання -------//

const refs = {
    input: document.querySelector("#datetime-picker"),
    buttonStart: document.querySelector("[data-start]"),
    days: document.querySelector("[data-days]"), 
    hours: document.querySelector("[data-hours]"), 
    minutes: document.querySelector("[data-minutes]"), 
    seconds: document.querySelector("[data-seconds]"), 
}

flatpickr("#datetime-picker", options); // підключення календаря за ід і доповненням опцій


function onClickStart() {
    selectTime = Date.parse(arreyTimes[0]); // записуємо обране значення у змінну

    findDifference(selectTime); // функція, щоб знайти інтервал

    setInterval(findDifference, 1000) // оновлення значення кожної секунди
}

function findDifference() {
    differenceInTime = selectTime - Date.now(); //від значення обраного дня віднімаємо поточний час
    
    const numberTime = convertMs(differenceInTime); // конвертуємо ms в об'єкт зі значенням часу

    // присвоєння тексту спану потрібного значення
    refs.days.textContent = addLeadingZero(numberTime.days);
    refs.hours.textContent = addLeadingZero(numberTime.hours);
    refs.minutes.textContent = addLeadingZero(numberTime.minutes);
    refs.seconds.textContent = addLeadingZero(numberTime.seconds);

}
// приведення до потрібного формату (00)
function addLeadingZero(value) {
    return `${value.toString().padStart(2, "0")}`;
}

// функція конвертування в об'єкт з ms ( з UTC часу)
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

 
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}



