$( document ).ready(function() {
  let tick = {};
  
  $('input:checkbox').change(function () {
    if (this.checked) {
      tick[$(this).data('id')] = $(this).data('name');
    } else {
      delete tick[$(this).data('id')];
    }
    $('div.amenities h4').html(function () {
      let amenities = Object.values(tick);
      if (amenities.length === 0) {
        return ('&nbsp');
      } else {
        return (amenities.toString());
      }
    });
  });
});
