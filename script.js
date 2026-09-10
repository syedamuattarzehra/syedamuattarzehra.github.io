const menuButton = document.querySelector('.menu-button');
const siteNav = document.querySelector('.site-nav');

if (menuButton && siteNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const workTabs = document.querySelectorAll('[data-work-tab]');
const workPanels = document.querySelectorAll('[data-work-panel]');

workTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.workTab;

    workTabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-selected', String(selected));
    });

    workPanels.forEach((panel) => {
      const selected = panel.dataset.workPanel === target;
      panel.classList.toggle('active', selected);
      panel.hidden = !selected;
    });
  });
});

const copyButton = document.querySelector('#copy-email');
if (copyButton) {
  copyButton.addEventListener('click', async () => {
    const email = copyButton.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      copyButton.textContent = 'Email copied';
    } catch (error) {
      copyButton.textContent = email;
    }
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
