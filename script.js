/* Obter a data de sistema para concatenar aos url's das api's */
var d = new Date();
var month = d.getMonth()+1;
var day = d.getDate();
var date = d.getFullYear() + '-' +
    (month<10 ? '0' : '') + month + '-' +
    (day<10 ? '0' : '') + day;



/* Obter o contador da populacao total europeia ao carregar a pagina */
var urlALL = "http://api.population.io:80/1.0/population/EUROPE/" + date;

$(window).ready(function(){
    $.getJSON(urlALL, function(result){
        /* NAO eliminar a variavel "date" */
        var date = result.total_population.date;
        var population = result.total_population.population;

        document.getElementById("cntALL").innerHTML = population.toLocaleString();
    });
 })


/*
$("button").click(function(){
    if(clicked){
        $(this).css('background-color', 'red');
        clicked  = false;
    } else {
        $(this).css('background-color', 'blue');
        clicked  = true;
    }   
});

$(document).ready(function(){
    $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
    });
});
*/

 

 /* Url's das api's de todos os paises */
var urlPRT = "http://api.population.io:80/1.0/population/Portugal/" + date;
var urlALB = "http://api.population.io:80/1.0/population/Albania/" + date;
var urlARM = "http://api.population.io:80/1.0/population/Armenia/" + date;
var urlAUT = "http://api.population.io:80/1.0/population/Austria/" + date;
var urlAZE = "http://api.population.io:80/1.0/population/Azerbaijan/" + date;
var urlBLR = "http://api.population.io:80/1.0/population/Belarus/" + date;
var urlBEL = "http://api.population.io:80/1.0/population/Belgium/" + date;
var urlBIH = "http://api.population.io:80/1.0/population/Bosnia/" + date;
var urlBGR = "http://api.population.io:80/1.0/population/Bulgaria/" + date;
var urlHRV = "http://api.population.io:80/1.0/population/Croatia/" + date;
var urlCYP = "http://api.population.io:80/1.0/population/Cyprus/" + date;
var urlCZE = "http://api.population.io:80/1.0/population/Czech/" + date;
var urlDNK = "http://api.population.io:80/1.0/population/Denmark/" + date;
var urlEST = "http://api.population.io:80/1.0/population/Estonia/" + date;
var urlFIN = "http://api.population.io:80/1.0/population/Finland/" + date;
var urlFRA = "http://api.population.io:80/1.0/population/France/" + date;
var urlGEO = "http://api.population.io:80/1.0/population/Georgia/" + date;
var urlDEU = "http://api.population.io:80/1.0/population/Germany/" + date;
var urlGRC = "http://api.population.io:80/1.0/population/Greece/" + date;
var urlHUN = "http://api.population.io:80/1.0/population/Hungary/" + date;
var urlISL = "http://api.population.io:80/1.0/population/Iceland/" + date;
var urlIRL = "http://api.population.io:80/1.0/population/Ireland/" + date;
var urlITA = "http://api.population.io:80/1.0/population/Italy/" + date;
var urlKAZ = "http://api.population.io:80/1.0/population/Kazakhstan/" + date;
var urlLVA = "http://api.population.io:80/1.0/population/Latvia/" + date;
var urlLTU = "http://api.population.io:80/1.0/population/Lithuania/" + date;
var urlLUX = "http://api.population.io:80/1.0/population/Luxembourg/" + date;
var urlMLT = "http://api.population.io:80/1.0/population/Malta/" + date;
var urlMDA = "http://api.population.io:80/1.0/population/Moldova/" + date;
var urlMNE = "http://api.population.io:80/1.0/population/Montenegro/" + date;
var urlNLD = "http://api.population.io:80/1.0/population/Netherlands/" + date;
var urlNOR = "http://api.population.io:80/1.0/population/Norway/" + date;
var urlPOL = "http://api.population.io:80/1.0/population/Poland/" + date;
var urlROU = "http://api.population.io:80/1.0/population/Romania/" + date;
var urlRUS = "http://api.population.io:80/1.0/population/Russia/" + date;
var urlSRB = "http://api.population.io:80/1.0/population/Serbia/" + date;
var urlSVK = "http://api.population.io:80/1.0/population/Slovakia/" + date;
var urlSVN = "http://api.population.io:80/1.0/population/Slovenia/" + date;
var urlESP = "http://api.population.io:80/1.0/population/Spain/" + date;
var urlSWE = "http://api.population.io:80/1.0/population/Sweden/" + date;
var urlCHE = "http://api.population.io:80/1.0/population/Switzerland/" + date;
var urlTUR = "http://api.population.io:80/1.0/population/Turkey/" + date;
var urlUKR = "http://api.population.io:80/1.0/population/Ukraine/" + date;
var urlGBR = "http://api.population.io:80/1.0/population/United%20Kingdom/" + date;



/*
$(".albania-list").click(function(){
    $.getJSON(urlALB, function(result){
        /* NAO eliminar a variavel "date" 
        var date = result.total_population.date;
        var population = result.total_population.population;

        document.getElementById("cntALB").innerHTML = population.toLocaleString();
        console.log(result);
    });
});
*/