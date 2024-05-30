/*Toggle Menu Button*/
document.addEventListener("DOMContentLoaded", function() {
    const navbarToggle = document.querySelector(".navbar-toggle");
    const menu = document.querySelector("nav ul");
  
    navbarToggle.addEventListener("click", function() {
      menu.classList.toggle("show");
      navbarToggle.classList.toggle("change");
    });
});

/*Download Resume Button*/
document.addEventListener("DOMContentLoaded", function() {
    const downloadButton = document.querySelector(".red-btn");
    
    downloadButton.addEventListener("click", function() {
        const resumeURL = 'Resume/Resume-Muhammad Rafay.pdf';
        window.open(resumeURL, '_blank');
    });
});

/*Open my email*/
function openEmail() {
    const emailAddress = 'mrafayhanan@gmail.com';
    const subject = 'Subject';
    const message = 'Hello Muhammad!\n';
    
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    
    window.open(mailtoLink, '_blank');
}

/*Form validation*/
const inputs = document.querySelectorAll('.input-field');

// Add event listeners to each input field
inputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.validity.valid) {
            input.classList.remove('invalid');
        } else {
            input.classList.add('invalid');
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const inputFields = document.querySelectorAll(".input-field");
  
    inputFields.forEach(function(input) {
      input.addEventListener("blur", function() {
        validateField(input);
      });
    });
  
    function validateField(input) {
      if (input.validity.valid) {
        input.classList.remove("invalid");
        document.getElementById(input.id + "-error").textContent = "";
      } else {
        input.classList.add("invalid");
        displayErrorMessage(input);
      }
    }
  
    function displayErrorMessage(input) {
      let errorMessage = "";
      if (input.validity.valueMissing) {
        errorMessage = "This field is required.";
      } else if (input.validity.typeMismatch) {
        errorMessage = "Please enter a valid email address.";
      }
      document.getElementById(input.id + "-error").textContent = errorMessage;
    }
  });

  
  document.querySelector(".sendMessage-btn").addEventListener("click", function(event) {
    const inputFields = document.querySelectorAll(".input-field");
    let isValid = true;
  
    inputFields.forEach(function(input) {
      if (!input.validity.valid) {
        isValid = false;
        validateField(input);
      }
    });
  
    if (!isValid) {
      event.preventDefault();
      return false;
    }
  });

  
  document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const slides = Array.from(slider.children);
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Clone the slides to create an infinite loop
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        slider.appendChild(clone);
    });

    let currentIndex = 0;

    function moveSlider() {
        currentIndex++;
        if (currentIndex >= slides.length) {
            slider.style.transition = 'none';
            slider.style.transform = 'translateX(0)';
            currentIndex = 0;
            setTimeout(() => {
                slider.style.transition = 'transform 1s linear';
                moveSlider();
            }, 20);
        } else {
            slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
            setTimeout(moveSlider, 2000); // Adjust the speed (in milliseconds) as needed
        }
    }

    slider.style.transition = 'transform 1s linear';
    setTimeout(moveSlider, 2000);
});
