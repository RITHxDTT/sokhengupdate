// Show message popup
const messagePopup = document.getElementById("messagePopup");
const footer = document.querySelector(".footer"); // Select the footer element

// Show the message popup and hide the footer
messagePopup.classList.add("active");
footer.style.display = "none"; // Hide the footer
setTimeout(() => {
    messagePopup.classList.remove("active");
    footer.style.display = "flex"; // Show the footer again
}, 3000);

// Photo Popup Logic
const images = ["Artboard1.webp", "Artboard2.webp", "Artboard3.webp", "Artboard4.webp", "Artboard5.webp"];
let currentIndex = 0;
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");

document.getElementById("photoIcon").addEventListener("click", () => {
    popup.classList.add("active");
    document.body.style.overflow = "hidden";
    popupImg.src = images[currentIndex];
});

document.getElementById("closePopup").addEventListener("click", () => {
    popup.classList.remove("active");
    document.body.style.overflow = "auto";
});

// Previous & Next Buttons for Photo Popup
document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    popupImg.src = images[currentIndex];
});

document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    popupImg.src = images[currentIndex];
});

// QR Popup Logic
const qrImages = ["Qr1.webp", "Qr2.webp", "Qr3.webp"];
let qrCurrentIndex = 0;
const qrPopup = document.getElementById("qrPopup");
const qrPopupImg = document.getElementById("qrPopupImg");

document.getElementById("qrIcon").addEventListener("click", () => {
    qrPopup.classList.add("active");
    document.body.style.overflow = "hidden";
    qrPopupImg.src = qrImages[qrCurrentIndex];
});

document.getElementById("closeQrPopup").addEventListener("click", () => {
    qrPopup.classList.remove("active");
    document.body.style.overflow = "auto";
});

// Previous & Next Buttons for QR Popup
document.getElementById("qrPrev").addEventListener("click", () => {
    qrCurrentIndex = (qrCurrentIndex - 1 + qrImages.length) % qrImages.length;
    qrPopupImg.src = qrImages[qrCurrentIndex];
});

document.getElementById("qrNext").addEventListener("click", () => {
    qrCurrentIndex = (qrCurrentIndex + 1) % qrImages.length;
    qrPopupImg.src = qrImages[qrCurrentIndex];
});