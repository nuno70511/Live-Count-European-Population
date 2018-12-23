var urlALL = "http://api.population.io:80/1.0/population/EUROPE/2015-12-24/";

$(window).ready(function(){
    $.getJSON(urlALL, function(result){
        /* NAO eliminar a variavel "date" */
        var date = result.total_population.date;
        var population = result.total_population.population;

        document.getElementById("cntALL").innerHTML = population.toLocaleString();
    });
 })

 /*

 $(".btn").click(function(){

});

*/