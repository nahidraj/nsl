$(document).ready(function () {
  // init Isotope
  let $grid = $(".portfolio-item-container").isotope({
    // options
  });
  // filter items on button click
  $(".portfolio-btn").on("click", "button", function () {
    let filterValue = $(this).attr("data-filter");
    $grid.isotope({
      filter: filterValue,
    });
  });

  $(".portfolio-btn button").on("click", function (event) {
    $(this).siblings(".active").removeClass("active");
    $(this).addClass("active");
    event.preventDefault();
  });
});
