let ism = prompt("Ismingizni kiriting")
let yosh = +prompt("Yoshingizni kiriting")
let familya = prompt("Familyangizni kiriting")
let sorov = prompt(" Malumotlaringiz kichik harifda bolsinmi yoki katta ? " +  " 1) Katta " + " 2) Kichik ")


let malumot = document.getElementById("malumot")

if (sorov === "1") {
    malumot.innerHTML = " Ismingiz : " + ism.toUpperCase() + " Familyangiz : " + familya.toUpperCase() + " Yoshingiz : " + yosh
} else if (sorov === "2") {
    malumot.innerHTML = " Ismingiz : " + ism.toLowerCase() + " Familyangiz : " + familya.toLowerCase() + " Yoshingiz : " + yosh
} else {
    alert("1 yoki 2 tanlang")
}





