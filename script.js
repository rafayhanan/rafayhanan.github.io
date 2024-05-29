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
    const emailAddress = 'your-email@example.com';
    const subject = 'Subject of the email';
    const message = 'Your pre-written message goes here.';
    
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    
    window.open(mailtoLink, '_blank');
}



