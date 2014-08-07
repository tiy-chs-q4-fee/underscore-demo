

var tmplImages = _.template($("#imageTmpl").html(), githubData);
var tmplNames = _.template($("#namesTmpl").html(), githubData);

// console.log();

$(".pictures").append(tmplImages);
$(".text").append(tmplNames);


function renderTemplate(template, $target, data) {
  var tmpl = _.template(template, data);

  $target.append(tmpl);

}
