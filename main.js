// Вітальне повідомлення
window.onload = function() {
    alert("Ласкаво просимо до MR.CAT.WEAR 🐱 Стиль для вашого улюбленця!");
};


//Кнопка підняття вгору
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "⬆ Вгору";
scrollBtn.id = "scrollTopBtn";
document.body.appendChild(scrollBtn);

// стилі кнопки через JS
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "30px";
scrollBtn.style.right = "30px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.backgroundColor = "#333";
scrollBtn.style.color = "white";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "5px";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "1000";

// показ кнопки при скролі
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

// прокрутка вгору
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


//Анімація кнопок
const buttons = document.querySelectorAll(".cta-button");

buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.1)";
        button.style.transition = "0.3s";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });
});