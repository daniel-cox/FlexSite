// Select all elements with class 'panel'
const panels = document.querySelectorAll('.panel');

// Function to toggle the 'open' class on the clicked panel
function toggleOpen() {
  // console.log('Hello');
  this.classList.toggle('open');
}

// Function to toggle the 'open-active' class when transition ends
function toggleActive(e) {
  // console.log(e.propertyName);
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

// Function to add the 'pulse' class once on panel hover
function addPulseOnce() {
  if (!this.classList.contains('pulse')) { // Check if the pulse animation hasn't been added yet
    this.classList.add('pulse');
    // Remove the 'mouseover' listener to prevent repeating
    this.removeEventListener('mouseover', addPulseOnce);
    // Add 'mouseout' listener to remove pulse when mouse leaves
    this.addEventListener('mouseout', removePulseOnce);
  }
}

// Function to remove the 'pulse' class when mouse leaves
function removePulseOnce() {
  this.classList.remove('pulse');
  // Remove the 'mouseout' listener to avoid unnecessary removals
  this.removeEventListener('mouseout', removePulseOnce);
  // Re-add 'mouseover' listener for future interactions
  this.addEventListener('mouseover', addPulseOnce);
}

// Add 'mouseover' listener to trigger the pulse animation
panels.forEach(panel => panel.addEventListener('mouseover', addPulseOnce));

// Add 'click' listener to toggle the 'open' class on click
panels.forEach(panel => panel.addEventListener('click', toggleOpen));

// Add 'transitionend' listener to toggle 'open-active' class
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
