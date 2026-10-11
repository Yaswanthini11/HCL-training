// ---------- 1. PROPERTY FILTER ----------
const filterButtons = document.querySelectorAll("#filters button");
const properties = document.querySelectorAll(".property");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const type = button.dataset.filter; // reads data-filter="villa" etc.

    // Highlight the clicked button
    filterButtons.forEach(function (b) {
      b.classList.remove("active", "btn-dark");
      b.classList.add("btn-outline-dark");
    });
    button.classList.add("active", "btn-dark");
    button.classList.remove("btn-outline-dark");

    // Show or hide each property
    properties.forEach(function (p) {
      if (type === "all" || p.dataset.type === type) {
        p.classList.remove("hidden");
      } else {
        p.classList.add("hidden");
      }
    });
  });
});

// ---------- 2. ANIMATED COUNTERS ----------
function runCounter(el) {
  const target = Number(el.dataset.target);
  let current = 0;
  const timer = setInterval(function () {
    current += Math.ceil(target / 50);
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = current;
  }, 30);
}

// Start counting only when the stats scroll into view
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      runCounter(entry.target);
      observer.unobserve(entry.target); // run once
    }
  });
});
document.querySelectorAll(".stat").forEach(function (s) {
  observer.observe(s);
});

// ---------- 3. CONTACT FORM VALIDATION ----------
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page from reloading

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    formMsg.innerHTML = '<div class="alert alert-danger">Please fill in all fields.</div>';
  } else if (!email.includes("@")) {
    formMsg.innerHTML = '<div class="alert alert-danger">Please enter a valid email.</div>';
  } else {
    formMsg.innerHTML =
      '<div class="alert alert-success">Thanks, ' + name + "! We'll contact you soon.</div>";
    form.reset();
    // Note: this doesn't actually send anything - you'd need a backend for that.
  }
});
