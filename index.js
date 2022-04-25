// options section code top of side bar
// adding onClick functionlty to option div and make its background selected
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

// **********submit quiz after click Tick-circle
$(document).ready(function () {
  $(".btn-bar-quiz,.btn-option-quiz").click(function (event) {
    $(this).children().show();
    $(this).children("span").text("Done");
    // $(this).children(span).text("Done");
    $(this).removeClass("submit");
    event.preventDefault();
    // $("#option-btn-text").text("Done");

    // setTimeout(function () {
    //   $(`.tick-circle`).hide();
    // }, 3000);
  });
});

// ********chat bar functionality

$(document).ready(function () {
  $("#chat-collapse-upp").click(function () {
    $(this).hide();
    $("#chat-collapse-down").show();
    $("#chat-collapse-text").text("Message your host");
    $("#active-chat").hide();
    $("#chat-collapse-text").addClass("chat-heading-color-collapse");
    $("#chat-top-heading").addClass("chat-top-bg-collapse");
    // $("#chat-content").slideUp(2000);
    // $("#chat-top-heading").slideUp();
    $("#chat-content").show();
    // $("#chat").toggleClass("chat-content-animation");
  });
  $("#chat-collapse-down").click(function () {
    $(this).hide();
    $("#chat-collapse-upp").show();
    $("#chat-collapse-text").text("Live Chat");
    $("#chat-top-heading").removeClass("chat-top-bg-collapse");
    $("#chat-collapse-text").removeClass("chat-heading-color-collapse");
    $("#active-chat").show();
    $("#chat-content").hide();
    // $("#chat").toggleClass("chat-content-animation");
  });
});
