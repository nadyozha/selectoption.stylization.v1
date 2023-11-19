$(function() {
  $('.stylish-select').stylishSelect();

  $('.stylish-select').on('change', function() {
    $('[href="' + this.value + '"]').trigger('click');
  });
});

