// Select all elements with class 'panel'
const panels = document.querySelectorAll('.panel');
const noPTag = document.querySelectorAll('p')

function hidePTag(){
  noPTag.forEach(p => {
   p.style.display = 'none';    
  });
}

// Function to toggle the 'open' class on the clicked panel
function toggleOpen() {
  // Use an arrow function to preserve the correct 'this' context
  panels.forEach(panel => {
    if (panel === this) {
      this.classList.toggle('open');
      
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

// Function to add the 'pulse' class once on panel hover
function addPulseOnce() {
  // console.log('test1');
  if (!this.classList.contains('pulse')) { // Check if the pulse animation hasn't been added yet
    this.classList.add('pulse');
    
    // Add 'mouseout' listener to remove pulse when mouse leaves
    this.addEventListener('mouseout', removePulseOnce);
    
  }
}

// Function to toggle the 'open-active' class when transition ends
function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

// Function to remove the 'pulse' class when mouse leaves
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
