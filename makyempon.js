// Typing animation for the comment
window.addEventListener("load", () => {
  const commentText = "IT Support Specialist";
  const target = document.getElementById("typed-comment");
  let index = 0;
  let isDeleting = false;

  function typeWriter() {
    if (!isDeleting) {
      target.textContent += commentText.charAt(index);
      index++;
      if (index < commentText.length) {
        setTimeout(typeWriter, 80);
      } else {
        // Pause before deleting
        setTimeout(() => {
          isDeleting = true;
          typeWriter();
        }, 1500);
      }
    } else {
      target.textContent = commentText.substring(0, index - 1);
      index--;
      if (index > 0) {
        setTimeout(typeWriter, 50);
      } else {
        // Pause before typing again
        isDeleting = false;
        setTimeout(typeWriter, 1000);
      }
    }
  }

  typeWriter();
});
