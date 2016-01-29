/**
 * Created by 1212962259 on 21.1.2016.
 */
$("document").ready(function () {
    //Nær í template-ið fyrir síðuna
    $.ajax({
        url: "templates/template.handlebars", success: function (template) {
            var renderer = Handlebars.compile(template);
            //Nær í JSON gögnin fyrir template-ið
            $.getJSON("http://apis.is/sports/football", function (data) {
                var result = renderer(data);
                $("#container").html(result);
            });
        }
    });
});