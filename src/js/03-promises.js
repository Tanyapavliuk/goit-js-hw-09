import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
//----елементи----//
const refs = {
  form: document.querySelector(".form"),
  button: document.querySelector('[type="submit"]'),
  amondInput: document.querySelector("[name='amount']"),
  deleyInput: document.querySelector("[name='delay']"),
  stepInput: document.querySelector("[name='step']"),
}
//----змінні----//
let position = 1;
let delay = null;
let step = null;
let amond = null;


//----слухачі----//

refs.form.addEventListener("submit", onClickButton);

//----функція  натиснення на кнопку----//
function onClickButton(evt) {
  evt.preventDefault();

  amond = +refs.amondInput.value;
  delay = +refs.deleyInput.value;
  step = +refs.stepInput.value;

  //----цикл, який виконується кількість разів, який в інпуті ----//
    for (let i = 1; i <= amond; i++) {
          createPromise({ position, delay }) // обробка промісу
          .then(({ position, delay }) => {  //позитивна
            Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
          })
          .catch(({ position, delay }) => {  //негативна
            Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
          });

      position += 1; // додаємо позиції +1
      delay += step; // додаємо значення кроку у затримку
    }

};

//----функція створення промісу----//
function createPromise({ position, delay }) {
      return new Promise((resolve, reject) => { // повертаємо одразу новий проміс
        
            setTimeout(() => {
              const shouldResolve = Math.random() > 0.3;
                if (shouldResolve) {
                  resolve({ position, delay }); // при успіху повертаємо об'єкт 
                } else {
                  reject({ position, delay });// при поразці повертаємо об'єкт 
                }
        }, delay);
    });
}
  


    





