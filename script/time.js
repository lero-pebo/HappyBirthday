// script.js
const countdownElement = document.getElementById('countdown');
const redirectButton = document.getElementById('redirectButton');

// Thay đổi thời gian đếm ngược ở đây (ngày, giờ, phút, giây)
const countdownDate = new Date("November 9, 2024 00:00:00").getTime();

const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Tính toán thời gian còn lại
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Hiển thị kết quả
    countdownElement.innerHTML = `${days} Ngày ${hours} Giờ ${minutes} Phút ${seconds} Giây`;

    // Nếu thời gian về 0, hiển thị nút bấm
    if (distance < 0) {
        clearInterval(countdownFunction);
        countdownElement.style.display = "none";
        redirectButton.classList.remove('hidden');
    }
}, 1000);

// Hàm chuyển tiếp trang
function redirect() {
    window.location.href = "index.html"; // Thay đổi URL ở đây
}
