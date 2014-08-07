
$(document).ready(function() {
  var homePage = {

      init: function() {
        homePage.initStyling();
        homePage.initEvents();
      },
      initStyling: function() {
        homePage.renderText($(".text"));


      },
      initEvents: function() {
          $(".showPictures").on("click", homePage.renderPictures);

      },
      render: function(template, data, $target) {
          var tmpl = _.template(template, data);

          $target.append(tmpl);

      },
      renderText: function($target) {
        homePage.render($("#namesTmpl").html(), githubData, $target);

      },
      renderPictures: function() {
        homePage.render($("#imageTmpl").html(), githubData, $(".pictures"));

      }

  };

homePage.init();





});
