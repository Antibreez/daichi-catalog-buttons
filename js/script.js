const $closeBtn = $(".action-modal__close");
const $inner = $(".action-modal__inner");
const $closeBtnBottom = $(".action-modal__close-bottom");

const $triggers = $("[data-modal]");

$triggers.each((idx, item) => {
  $(item).on("click", function () {
    const name = $(this).attr("data-modal");
    $(`#${name}`).addClass("opened");
    $("body").addClass("no-scroll");
  });
});

$closeBtn.on("click", function () {
  $(this).parents(".action-modal").removeClass("opened");
  $("body").removeClass("no-scroll");
});

$inner.on("click", function (e) {
  if ($(e.target).parents(".action-modal__body").length === 0) {
    $(this).parents(".action-modal").removeClass("opened");
    $("body").removeClass("no-scroll");
  }
});
