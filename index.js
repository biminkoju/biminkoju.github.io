var colapsables = document.getElementsByClassName("colapsable");

for (var i = 0; i < colapsables.length; i++) {
  colapsables[i].onclick = function() {
    this.classList.toggle('is-open');

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // colapsable is currently open, so close it
      content.style.maxHeight = null;
    } else {
      // colapsable is currently closed, so open it
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}