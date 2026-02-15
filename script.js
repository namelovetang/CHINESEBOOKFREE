// ===== MAIN WEBSITE SCRIPT =====

// แจ้งเตือนตอนโหลดหน้าเว็บเสร็จ
window.addEventListener("load", function() {
    console.log("เว็บไซต์โหลดเรียบร้อยแล้ว ✨");
});


// ===== ระบบแจ้งเตือนตอนกดปุ่มดาวน์โหลด =====

const downloadButtons = document.querySelectorAll("a[download]");

downloadButtons.forEach(function(button){
    button.addEventListener("click", function(){
        alert("กำลังเริ่มดาวน์โหลดไฟล์ 📥");
    });
});


// ===== ปุ่ม Scroll กลับขึ้นด้านบน =====

const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "30px";
scrollBtn.style.right = "30px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.border = "none";
scrollBtn.style.background = "#333";
scrollBtn.style.color = "white";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.fontSize = "18px";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", function(){
    if(window.scrollY > 200){
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ===== เอฟเฟกต์ hover การ์ดแบบนุ่มขึ้น =====

const cards = document.querySelectorAll(".card");

cards.forEach(function(card){
    card.addEventListener("mouseenter", function(){
        card.style.transition = "0.3s";
        card.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseleave", function(){
        card.style.transform = "scale(1)";
    });
});