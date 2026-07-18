const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector(".site-nav");

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const filters = document.querySelectorAll(".filter");
const workCards = document.querySelectorAll(".work-card");

filters.forEach((filterButton) => {
  filterButton.addEventListener("click", () => {
    const selected = filterButton.dataset.filter;

    filters.forEach((button) => button.classList.remove("active"));
    filterButton.classList.add("active");

    workCards.forEach((card) => {
      const matches = selected === "all" || card.dataset.category === selected;
      card.classList.toggle("hidden", !matches);
    });
  });
});

const copyButton = document.querySelector("#copy-email");

if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const email = copyButton.dataset.email;

    try {
      await navigator.clipboard.writeText(email);
      copyButton.textContent = "Email copied";
    } catch (error) {
      copyButton.textContent = email;
    }
  });
}

document.querySelector("#year").textContent = new Date().getFullYear();
