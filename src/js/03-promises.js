import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRef = document.querySelector('form.form');

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

class PromiseGenerator {
  constructor() {
    this.form = null;
    this.delay = null;
    this.step = null;
    this.amount = null;
  }

  start(form) {
    this.form = form;
    if (!this.form) {
      Notify.failure('Target Form not found!');
      return;
    }

    this.collectFormData();
    if (!this.delay) {
      Notify.failure('Delay value not found!');
      return;
    }
    if (!this.step) {
      Notify.failure('Step value not found!');
      return;
    }
    if (!this.amount) {
      Notify.failure('Amount value not found!');
      return;
    }

    this.toggleSubmitButtonState();
    this.createPromisesQueue();
  }

  collectFormData() {
    const formData = new FormData(this.form);

    formData.forEach((value, key) => {
      this[key] = Number(value);
    });
  }

  toggleSubmitButtonState() {
    const submitButtonRef = this.form.querySelector('[type="submit"]');
    submitButtonRef.toggleAttribute('disabled');
  }

  createPromisesQueue() {
    let iterationDelay = this.delay;

    for (let i = 1; i <= this.amount; i += 1) {
      this.createPromise(i, iterationDelay)
        .then(({ position, delay }) => {
          Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notify.failure(`Rejected promise ${position} in ${delay}ms`);
        })
        .finally(() => {
          if (i === this.amount) this.toggleSubmitButtonState();
        });

      iterationDelay += this.step;
    }
  }

  createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;

      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    });
  }
}

const promiseGenerator = new PromiseGenerator();

const onFormSubmit = event => {
  event.preventDefault();
  promiseGenerator.start(event.currentTarget);
};

formRef.addEventListener('submit', onFormSubmit);
