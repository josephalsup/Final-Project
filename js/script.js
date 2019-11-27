
$(function() {
  $("#console-box").append("console active...");

// when clicked, gets data entered in textboxes and stores them to a value to display.
  $("button").click(function() {
    var termvar = document.getElementById("term").value;
    var yearvar = document.getElementById("year").value;
    $("#console-box").append($(this).attr("class") + "|value:" + $(this).text() + "."
                            + "\n" + "|term value: " + termvar + "\n" + "|year value: " + yearvar);

  });
});