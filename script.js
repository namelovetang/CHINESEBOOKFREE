// รอให้หน้าเว็บโหลดเสร็จก่อน
document.addEventListener("DOMContentLoaded", function () {

    // ===== Fade In ตอนโหลดหน้า =====
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.6s ease";
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);


    // ===== ปุ่มเด้งเบา ๆ ตอนกด =====
    const buttons = document.querySelectorAll(".btn, .open-btn, .download-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function (e) {
            button.style.transform = "scale(0.95)";
            setTimeout(() => {
                button.style.transform = "scale(1)";
            }, 150);
        });
    });


    // ===== แจ้งเตือนตอนดาวน์โหลด =====
    const downloadButtons = document.querySelectorAll(".download-btn");

    downloadButtons.forEach(button => {
        button.addEventListener("click", function () {
            alert("กำลังเริ่มดาวน์โหลดไฟล์ 📚✨");
        });
    });


    // ===== Hover การ์ดลื่นขึ้น =====
    const cards = document.querySelectorAll(".book-card, .card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", function () {
            card.style.transition = "all 0.3s ease";
            card.style.boxShadow = "0 15px 35px rgba(0,0,0,0.3)";
        });

        card.addEventListener("mouseleave", function () {
            card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
        });
    });


    // ===== Smooth Scroll =====
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href"))
                .scrollIntoView({ behavior: "smooth" });
        });
    });

});
