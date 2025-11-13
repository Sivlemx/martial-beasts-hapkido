document.addEventListener('DOMContentLoaded', () => {
      const themeSwitcher = document.getElementById('theme-switcher');
      const themeStyle = document.getElementById('theme-style');
      const themeStyleLight = document.getElementById('theme-style-light');

      themeSwitcher.addEventListener('click', () => {
        if (themeStyle.disabled) {
          // Switch to dark theme
          themeStyle.disabled = false;
          themeStyleLight.disabled = true;
          themeSwitcher.textContent = 'Cambiar a Tema Claro';
        } else {
          // Switch to light theme
          themeStyle.disabled = true;
          themeStyleLight.disabled = false;
          themeSwitcher.textContent = 'Cambiar a Tema Oscuro';
        }
      });
    });