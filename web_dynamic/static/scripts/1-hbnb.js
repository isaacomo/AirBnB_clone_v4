$( document ).ready(function() {
  let tick = {};
  const checkbox = document.querySelector("input[name=checkbox]");

  checkbox.addEventListener('change', function() {
  if (this.checked) {
    tick[$(this).data('id')] = $(this).data('name');
  } else {
    delete tick[$(this).data('id')];
  }
  document.querySelector('div.amenities h4').innerHTML = checkbox;
});
