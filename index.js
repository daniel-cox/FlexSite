// Select all elements with class 'panel'
const panels = document.querySelectorAll('.panel');
const noPTag = document.querySelectorAll('p');
const tremontiAudio = new Audio("/audio/Tremonti.mp3");
const petrucciAudio = new Audio("/audio/Petrucci.mp3");
const dimebagAudio = new Audio("/audio/Dimebag.mp3");
const mishaAudio = new Audio("/audio/Misha.mp3"); // New audio element
const zakkAudio = new Audio("/audio/Zakk.mp3"); // New audio element


// Set the volume level for all audio (e.g., 0.3 for 30% volume)
tremontiAudio.volume = 0.3;
petrucciAudio.volume = 0.3;
dimebagAudio.volume = 0.3;
mishaAudio.volume = 0.3;
zakkAudio.volume = 0.3; 


function hidePTag() {
  noPTag.forEach(p => {
    p.style.display = 'none';
  });
}

// Function to toggle the 'open' class on the clicked panel
function toggleOpen() {
  // Use an arrow function to preserve the correct 'this' context
  panels.forEach(panel => {
    if (panel === this) {
      const isOpen = this.classList.toggle('open');

      // Check if the clicked panel is panel1
      if (panel === panel1) {
        if (isOpen) {
          // Play the tremontiAudio when panel1 is opened
          tremontiAudio.play();
        } else {
          // Stop the tremontiAudio when panel1 is closed
          tremontiAudio.pause();
          tremontiAudio.currentTime = 0; // Reset audio to the beginning
        }
      } else if (panel === panel2) {
        if (isOpen) {
          // Play the petrucciAudio when panel2 is opened
          petrucciAudio.play();
        } else {
          // Stop the petrucciAudio when panel2 is closed
          petrucciAudio.pause();
          petrucciAudio.currentTime = 0; // Reset audio to the beginning
        }
      } else if (panel === panel3) {
        if (isOpen) {
          // Play the dimebagAudio when panel3 is opened
          dimebagAudio.play();
        } else {
          // Stop the dimebagAudio when panel3 is closed
          dimebagAudio.pause();
          dimebagAudio.currentTime = 0; // Reset audio to the beginning
        }
      } else if (panel === panel4) { 
        if (isOpen) {
          // Play the mishaAudio when panel4 is opened
          mishaAudio.play();
        } else {
          // Stop the mishaAudio when panel4 is closed
          mishaAudio.pause();
          mishaAudio.currentTime = 0; // Reset audio to the beginning
        }
      }else if (panel === panel5) {
        if (isOpen) {
          // Play the zakkAudio when panel5 is opened
          zakkAudio.play();
        } else {
          // Stop the zakkAudio when panel5 is closed
          zakkAudio.pause();
          zakkAudio.currentTime = 0; // Reset audio to the beginning
        }
      }

      // Toggle the visibility of the <p>, <h1>, and <h4> elements within the clicked panel
      const pElement = this.querySelector('p');
      const h1Element = this.querySelector('h1');
      const h4Element = this.querySelector('h4');

      if (pElement) {
        pElement.style.display = pElement.style.display === 'none' ? 'block' : 'none';
      }

      if (h1Element) {
        h1Element.style.display = h1Element.style.display === 'none' ? 'block' : 'none';
      }

      if (h4Element) {
        h4Element.style.display = h4Element.style.display === 'none' ? 'block' : 'none';
      }
    }
  });
}

// Select panel1, panel2, panel3, panel4 and panel5
const panel1 = document.querySelector('.panel1');
const panel2 = document.querySelector('.panel2');
const panel3 = document.querySelector('.panel3');
const panel4 = document.querySelector('.panel4'); 
const panel5 = document.querySelector('.panel5'); 


// Function to add the 'pulse' class once on panel hover
function addPulseOnce() {
  if (!this.classList.contains('pulse')) { // Check if the pulse animation hasn't been added yet
    this.classList.add('pulse');

    // Add 'mouseout' listener to remove pulse when the mouse leaves
    this.addEventListener('mouseout', removePulseOnce);
  }
}

// Function to toggle the 'open-active' class when transition ends
function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

// Function to remove the 'pulse' class when the mouse leaves
function removePulseOnce() {
  this.classList.remove('pulse');
  // Remove the 'mouseout' listener to avoid unnecessary removals
  this.removeEventListener('mouseout', removePulseOnce);
}

// Call hidePTag function when the page loads
window.addEventListener('DOMContentLoaded', hidePTag);

// Add 'mouseover' listener to trigger the pulse animation
panels.forEach(panel => panel.addEventListener('mouseover', addPulseOnce));

// Add 'click' listener to toggle the 'open' class on click
panels.forEach(panel => panel.addEventListener('click', toggleOpen));

// Add 'transitionend' listener to toggle 'open-active' class
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

// Function to stop audio when clicking outside of panels
function stopAudioOnClickOutside(event) {
  // Check if the click target is not within any panel
  if (!Array.from(panels).some(panel => panel.contains(event.target))) {
    tremontiAudio.pause();
    tremontiAudio.currentTime = 0; // Reset tremontiAudio to the beginning
    petrucciAudio.pause();
    petrucciAudio.currentTime = 0; // Reset petrucciAudio to the beginning
    dimebagAudio.pause();
    dimebagAudio.currentTime = 0; // Reset dimebagAudio to the beginning
    mishaAudio.pause();
    mishaAudio.currentTime = 0; // Reset mishaAudio to the beginning
    zakkAudio.pause();
    zakkAudio.currentTime = 0; // Reset zakkAudio to the beginning
  }
}

// Add click event listener to document to stop audio when clicking outside of panels
document.addEventListener('click', stopAudioOnClickOutside);
