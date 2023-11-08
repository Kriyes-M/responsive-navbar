const hamburgerButton = document.getElementById('hamburgerButton');
const linksList = document.getElementById('linksList');

function toggleLinks() {
  if (linksList.classList.contains('show-links')) {
    linksList.classList.remove('show-links');
  }
  else {
    linksList.classList.add('show-links');
  }
}