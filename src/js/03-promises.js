import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRef = document.querySelector('form.form');
const submitButtonRef = formRef.querySelector('button');

Notify.init({
  distance: '20px',
  clickToClose: true,
  cssAnimationStyle: 'from-right',
  fontSize: '14px',
  delay: 4000,
  failure: {
    background: '#ff4432',
  },
});

const createPromise = (position, delay) =>
  new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

const createPromisesQueue = ({ delay, step, amount }) => {
  let iterationDelay = delay;

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, iterationDelay)
      .then(({ position, delay }) => {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      })
      .finally(() => {
        if (i === amount) toggleSubmitButtonState();
      });

    iterationDelay += step;
  }
};

const collectFormData = ({ delay, step, amount }) => ({
  delay: Number(delay.value),
  step: Number(step.value),
  amount: Number(amount.value),
});

const toggleSubmitButtonState = () => {
  submitButtonRef.toggleAttribute('disabled');
};

const onFormSubmit = event => {
  event.preventDefault();
  createPromisesQueue(collectFormData(event.currentTarget.elements));
  toggleSubmitButtonState();
};

formRef.addEventListener('submit', onFormSubmit);
