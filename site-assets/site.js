(() => {
  const dialog = document.querySelector('#access-dialog');
  const form = document.querySelector('#access-form');
  const password = document.querySelector('#access-password');
  const error = document.querySelector('#access-error');
  let destination = './project/';

  document.querySelectorAll('[data-gated-destination]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      destination = trigger.dataset.gatedDestination;

      if (sessionStorage.getItem('fp-access') === 'granted') {
        window.location.href = destination;
        return;
      }

      error.hidden = true;
      password.value = '';
      dialog.showModal();
      window.setTimeout(() => password.focus(), 0);
    });
  });

  form?.addEventListener('submit', (event) => {
    event.preventDefault();

    if (password.value === 'kk') {
      sessionStorage.setItem('fp-access', 'granted');
      window.location.href = destination;
      return;
    }

    error.hidden = false;
    password.select();
  });
})();
