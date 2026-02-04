if (
  window.location.pathname.includes("home.html") ||
  window.location.pathname.includes("about.html") ||
  window.location.pathname.includes("packages.html") ||
  window.location.pathname.includes("book.html")
) {
  if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "login.html";
  }
}

function customerLogin() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  if (name === "" || email === "" || phone === "") {
    alert("Please fill all details");
  } else {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("customerName", name);
    window.location.href = "index.html";
  }
}

function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 3000);
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".booking-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      alert("🎉 Booking Successful! We will contact you soon.");

      form.reset();
    });
  }
});
// ===== LOGIN FUNCTION =====
function loginUser() {
  localStorage.setItem("isLoggedIn", "true");
  window.location.href = "home.html";
}

// ===== LOGOUT FUNCTION =====
function logoutUser() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
}

// ===== PAGE PROTECTION =====
document.addEventListener("DOMContentLoaded", () => {
  const protectedPages = ["home.html", "about.html", "packages.html", "book.html"];
  const currentPage = window.location.pathname.split("/").pop();

  if (protectedPages.includes(currentPage)) {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      window.location.href = "login.html";
    }
  }
});


