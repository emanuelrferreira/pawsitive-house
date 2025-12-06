/*JS Service Page ref- https://www.w3schools.com/howto/howto_js_toggle_class.asp*/

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-target]").forEach(function (item) {
    item.addEventListener("click", function () {
      const target = document.getElementById(item.dataset.target);
      if (!target) return;
      target.classList.toggle("open");
    });
  });
});

/*JS Contact Page- https://www.w3schools.com/js/js_conditionals.asp*/

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector(".contact-form"); 
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault(); //blocking the form to be sent
            alert("Thank you 🐾  We'll reply to your message soon!!");
            contactForm.reset();
        });
    }
});



