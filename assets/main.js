document.addEventListener('DOMContentLoaded', () => {
  const themeSwitcher = document.getElementById('theme-switcher');

  // Check for saved theme preference or system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

  // Apply saved theme or system preference if no saved theme
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else if (!savedTheme && systemPrefersLight) {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  themeSwitcher.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');

    if (currentTheme === 'light') {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  });
});
