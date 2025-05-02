// Typing animation for the comment

// Wait for the page to fully load
window.addEventListener("load", () => {
  // List of job descriptions to display one after another
  const commentTexts = [
    "IT Support Specialist",
    "Hardware & Software Expert",
    "Network Technician",
    "Web Enthusiast",
    ];

  // Target element in your HTML where the text will appear
  const target = document.getElementById("typed-comment");

  // Track which job description and which character we're on
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  // The main function that types and deletes characters
  function typeWriter() {
    // Get the current full string to display
    const currentText = commentTexts[textIndex];

    if (!isDeleting) {
      // Typing mode: add one character at a time
      target.textContent += currentText.charAt(charIndex);
      charIndex++;

      // If not yet finished typing the word, continue
      if (charIndex < currentText.length) {
        setTimeout(typeWriter, 80); // speed of typing
      } else {
        // Pause before deleting
        setTimeout(() => {
          isDeleting = true;
          typeWriter();
        }, 1500); // pause after full text
      }
    } else {
      // Deleting mode: remove one character at a time
      target.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;

      // If not yet fully deleted, continue deleting
      if (charIndex > 0) {
        setTimeout(typeWriter, 50); // speed of deleting
      } else {
        // Move to the next string in the list
        isDeleting = false;
        textIndex = (textIndex + 1) % commentTexts.length; // loop around
        setTimeout(typeWriter, 1000); // pause before next word
      }
    }
  }

  // Start the typing effect
  typeWriter();
});
