/**
 * Password gate for case study pages.
 * Change CASE_STUDY_PASSWORD below; access is remembered for the browser session.
 */
(function () {
  var CASE_STUDY_PASSWORD = 'portfolio'; // Change this to your desired password
  var STORAGE_KEY = 'caseStudyUnlocked';

  if (sessionStorage.getItem(STORAGE_KEY) === 'true') {
    return;
  }

  var overlay = document.createElement('div');
  overlay.id = 'case-study-gate';
  overlay.className = 'case-study-gate';
  overlay.innerHTML =
    '<div class="case-study-gate__box">' +
      '<p class="case-study-gate__title">Case study</p>' +
      '<p class="case-study-gate__hint">Enter the password to view.</p>' +
      '<form class="case-study-gate__form" id="case-study-gate-form">' +
        '<input type="password" id="case-study-gate-input" class="case-study-gate__input" placeholder="Password" autocomplete="current-password" autofocus />' +
        '<button type="submit" class="case-study-gate__btn">View</button>' +
      '</form>' +
      '<p class="case-study-gate__error" id="case-study-gate-error" aria-live="polite"></p>' +
    '</div>';

  document.body.insertBefore(overlay, document.body.firstChild);

  var form = document.getElementById('case-study-gate-form');
  var input = document.getElementById('case-study-gate-input');
  var errorEl = document.getElementById('case-study-gate-error');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    errorEl.textContent = '';
    if (input.value === CASE_STUDY_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, 'true');
      overlay.remove();
    } else {
      errorEl.textContent = 'Incorrect password. Try again.';
      input.focus();
    }
  });
})();
