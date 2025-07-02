document.addEventListener('DOMContentLoaded', function () {
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('accept-cookies');
  const rejectBtn = document.getElementById('refuse-cookies');

  if (!localStorage.getItem('cookiesConsent')) {
    banner.style.display = 'block';
  }

  acceptBtn.addEventListener('click', function () {
    localStorage.setItem('cookiesConsent', 'accepted');
    banner.style.display = 'none';
  });

  rejectBtn.addEventListener('click', function () {
    localStorage.setItem('cookiesConsent', 'rejected');
    banner.style.display = 'none';
  });
});
