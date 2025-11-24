document.addEventListener("DOMContentLoaded", function () {
    console.log("JS працює"); // перевірка

    const btn = document.createElement("button");
    btn.innerText = "⬆";
    btn.style.position = "fixed";
    btn.style.bottom = "20px";
    btn.style.right = "20px";
    btn.style.padding = "10px";
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
    btn.style.zIndex = "9999";
    document.body.appendChild(btn);
    btn.style.display = "block"; // одразу показуємо, без скролу
});
