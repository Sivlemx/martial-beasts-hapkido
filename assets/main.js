document.addEventListener('DOMContentLoaded', () => {
  const themeSwitcher = document.getElementById('theme-switcher');
  const darkTheme = document.getElementById('theme-style');
  const lightTheme = document.getElementById('theme-style-light');

  themeSwitcher.addEventListener('click', () => {
    if (darkTheme.hasAttribute('disabled')) {
      darkTheme.removeAttribute('disabled');
      lightTheme.setAttribute('disabled', 'true');
    } else {
      lightTheme.removeAttribute('disabled');
      darkTheme.setAttribute('disabled', 'true');
    }
  });
});
