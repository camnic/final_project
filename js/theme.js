document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || '';
    document.body.setAttribute('data-theme', savedTheme);

    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? '' : 'dark';
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});
