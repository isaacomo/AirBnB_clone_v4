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

  $(function() {
    $.ajax('http://0.0.0.0:5001/api/v1/status/').done(function (data) {
      if (data.Status === "OK") {
	$("div#api_status").addClass("available");
      } else {
	$("div#api_status").removeClass("available");
    });
  });
});
