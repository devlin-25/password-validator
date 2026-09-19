const passwordInput = document.querySelector("#password");
const validatedBtn = document.querySelector("#validatedBtn");
const message = document.querySelector("#message");

const lengthIndicator = document.querySelector("#length");
const lowercaseIndicator = document.querySelector("#lowercase");
const uppercaseIndicator = document.querySelector("#uppercase");
const numberIndicator = document.querySelector("#number");
const specialIndicator = document.querySelector("#special");

const indicator = document.querySelector(".indicator");



passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;

    const length = password.length >= 8;
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);

    lengthIndicator.textContent = length ? "✓ Minimal 8 Karakter" : "✗ Minimal 8 Karakter";
    lowercaseIndicator.textContent = hasLowercase ? "✓ Minimal 1 Huruf Kecil" : "✗ Minimal 1 Huruf Kecil";
    uppercaseIndicator.textContent = hasUppercase ? "✓ Minimal 1 Huruf Kapital" : "✗ Minimal 1 Huruf Kapital";
    numberIndicator.textContent = hasNumber ? "✓ Minimal 1 Angka" : "✗ Minimal 1 Angka";
    specialIndicator.textContent = hasSpecial ? "✓ Minimal 1 Karakter Spesial" : "✗ Minimal 1 Karakter Spesial";
});


validatedBtn.addEventListener("click", () => {
    const password = passwordInput.value;
    indicator.removeAttribute("hidden");

    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);

    if (password.length >= 8 && hasLowercase && hasUppercase && hasNumber && hasSpecial){
         indicator.classList.add("valid");
         indicator.textContent = "✓ Password Valid";
    } else {
        indicator.classList.add("invalid");
        indicator.textContent = "✗ Password Invalid"; 
    }
    
});