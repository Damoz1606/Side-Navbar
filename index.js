const menuItems = document.querySelectorAll(".menu-item");
const glider = document.querySelector(".glider");
const body = document.querySelector("body");

const clickedEvent = (item, index) => {
    console.log(glider);
    const themeTarget = item.getAttribute("theme-target");
    body.setAttribute("theme", themeTarget);
    menuItems.forEach(element => element.classList.remove("active"));
    item.classList.add("active");
    glider.style.transform = `translateY(${index * 100}%)`;
}

menuItems.forEach((item, index) => item.addEventListener('click', () => clickedEvent(item, index)));