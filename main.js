document.addEventListener("DOMContentLoaded", function () {

    console.log("JS підключений ✅");

    const scrollBtn = document.createElement("button");
    scrollBtn.innerHTML = "⬆";
    scrollBtn.id = "scrollTopBtn";
    document.body.appendChild(scrollBtn);

    scrollBtn.style.position = "fixed";
    scrollBtn.style.bottom = "20px";
    scrollBtn.style.right = "20px";
    scrollBtn.style.padding = "15px";
    scrollBtn.style.background = "#000";
    scrollBtn.style.color = "#fff";
    scrollBtn.style.border = "none";
    scrollBtn.style.borderRadius = "50%";
    scrollBtn.style.fontSize = "20px";
    scrollBtn.style.cursor = "pointer";
    scrollBtn.style.display = "none";
    scrollBtn.style.zIndex = "99999";

    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 200) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    scrollBtn.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

});
