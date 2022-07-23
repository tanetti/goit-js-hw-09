import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {};

Notify.init({
  position: 'right-bottom',
  distance: '20px',
  clickToClose: true,
  cssAnimationStyle: 'from-right',
  fontSize: '14px',
  failure: {
    background: '#ff4432',
  },
  warning: {
    textColor: '#000',
  },
});

const createPromise = (position, delay) => {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
};
