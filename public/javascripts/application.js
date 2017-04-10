$(document).ready(function() {
  $.getJSON("https://bootswatch.com/api/3.json", function(data) {
    var ptheme = localStorage.getItem('theme');
    var themes = data.themes;
    var select = $("select");
    themes.forEach(function(value, index) {
      if (value.name == ptheme) {
        select.prepend($("<option />")
            .val(index)
            .text(value.name))
          .attr("selected", "selected");
      } else {
        select.append($("<option />")
          .val(index)
          .text(value.name));
      }
    });
    select.change(function() {
      var theme = themes[$(this).val()];
      $("#bs").attr("href", theme.css);
      localStorage.setItem('theme', theme.name);
    }).change();
  }, "json").fail(function() {
    alert("Incompatible browser!");
  });
});
