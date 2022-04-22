$(document).ready(function () {
  $("#check-1").click(function () {
    $(this).toggleClass("bg-black");
    var checkbox1 = $("#checkbox-1");
    checkbox1.prop("checked", !checkbox1.prop("checked"));
  });
  $("#check-2").click(function () {
    $(this).toggleClass("bg-black");
    var checkbox2 = $("#checkbox-2");
    checkbox2.prop("checked", !checkbox2.prop("checked"));
  });
  $("#check-3").click(function () {
    $(this).toggleClass("bg-black");
    var checkbox3 = $("#checkbox-3");
    checkbox3.prop("checked", !checkbox3.prop("checked"));
  });
  $("#check-4").click(function () {
    $(this).toggleClass("bg-black");
    var checkbox4 = $("#checkbox-4");
    checkbox4.prop("checked", !checkbox4.prop("checked"));
  });
});
