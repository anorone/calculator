import App from './js/App';

const app = new App();
app.init();

const themeSwitcher = document.querySelector('.theme-switcher');

themeSwitcher.addEventListener('click', () => {
  document.body.classList.toggle('light');
});
