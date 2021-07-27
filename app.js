$(window).load(function () {
  var spins = 0;
  setInterval(function () {
    spins = spins + 1;
    $("#spin").text(spins + " spin" + (spins != 1 ? "s" : ""));
    if (spins == 10) $("#ethan").show();
    else if (spins == 17) $("#ethan").hide();
  }, 4205);
});
