/* Obter a data de sistema para concatenar aos url's das api's */
var d = new Date();
var month = d.getMonth()+1;
var day = d.getDate();
var date = d.getFullYear() + '-' +
    (month<10 ? '0' : '') + month + '-' +
    (day<10 ? '0' : '') + day;


// Url's das api's de todos os paises
var urlALL = "http://api.population.io:80/1.0/population/EUROPE/" + date;

var urlPRT = "http://api.population.io:80/1.0/population/Portugal/" + date;
var urlALB = "http://api.population.io:80/1.0/population/Albania/" + date;
var urlARM = "http://api.population.io:80/1.0/population/Armenia/" + date;
var urlAUT = "http://api.population.io:80/1.0/population/Austria/" + date;
var urlAZE = "http://api.population.io:80/1.0/population/Azerbaijan/" + date;
var urlBLR = "http://api.population.io:80/1.0/population/Belarus/" + date;
var urlBEL = "http://api.population.io:80/1.0/population/Belgium/" + date;
var urlBIH = "http://api.population.io:80/1.0/population/Bosnia%20and%20Herzegovina/" + date;
var urlBGR = "http://api.population.io:80/1.0/population/Bulgaria/" + date;
var urlHRV = "http://api.population.io:80/1.0/population/Croatia/" + date;
var urlCYP = "http://api.population.io:80/1.0/population/Cyprus/" + date;
var urlCZE = "http://api.population.io:80/1.0/population/Czech%20Republic/" + date;
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
var urlNLD = "http://api.population.io:80/1.0/population/The%20Netherlands/" + date;
var urlNOR = "http://api.population.io:80/1.0/population/Norway/" + date;
var urlPOL = "http://api.population.io:80/1.0/population/Poland/" + date;
var urlROU = "http://api.population.io:80/1.0/population/Romania/" + date;
var urlRUS = "http://api.population.io:80/1.0/population/Russian%20Federation/" + date;
var urlSRB = "http://api.population.io:80/1.0/population/Serbia/" + date;
var urlSVK = "http://api.population.io:80/1.0/population/Slovak%20Republic/" + date;
var urlSVN = "http://api.population.io:80/1.0/population/Slovenia/" + date;
var urlESP = "http://api.population.io:80/1.0/population/Spain/" + date;
var urlSWE = "http://api.population.io:80/1.0/population/Sweden/" + date;
var urlCHE = "http://api.population.io:80/1.0/population/Switzerland/" + date;
var urlTUR = "http://api.population.io:80/1.0/population/Turkey/" + date;
var urlUKR = "http://api.population.io:80/1.0/population/Ukraine/" + date;
var urlGBR = "http://api.population.io:80/1.0/population/United%20Kingdom/" + date;



/* Variaveis para guardar o contador da populacao */
var cntALL;

var cntPRT;
var cntALB;
var cntARM;
var cntAUT;
var cntAZE;
var cntBLR;
var cntBEL;
var cntBIH;
var cntBGR;
var cntHRV;
var cntCYP;
var cntCZE;
var cntDNK;
var cntEST;
var cntFIN;
var cntFRA;
var cntGEO;
var cntDEU;
var cntGRC;
var cntHUN;
var cntISL;
var cntIRL;
var cntITA;
var cntKAZ;
var cntLVA;
var cntLTU;
var cntLUX;
var cntMLT;
var cntMDA;
var cntMNE;
var cntNLD;
var cntNOR;
var cntPOL;
var cntROU;
var cntRUS;
var cntSRB;
var cntSVK;
var cntSVN;
var cntESP;
var cntSWE;
var cntCHE;
var cntTUR;
var cntUKR;
var cntGBR;


$(window).ready(function(){

    /* NAO eliminar a variavel "date" */


    //EUROPE
    $.getJSON(urlALL, function(result){
        
        var date = result.total_population.date;
        var population = result.total_population.population;

        cntALL = population;
    });

    //ALBANIA
    $.getJSON(urlALB, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntALB = population;
    });

    //ARMENIA    
    $.getJSON(urlARM, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntARM = population;
    });

    //AUSTRIA
    $.getJSON(urlAUT, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntAUT = population;
    });

    //AZERBAIJAN
    $.getJSON(urlAZE, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntAZE = population;
    });

    //BELARUS
    $.getJSON(urlBLR, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntBLR = population;
    });

    //BELGIUM
    $.getJSON(urlBEL, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntBEL = population;
    });

    //BOSNIA AND HERZEGOVINA
    $.getJSON(urlBIH, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntBIH = population;
    });

    //BULGARIA
    $.getJSON(urlBGR, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntBGR = population;
    });

    //CROATIA
    $.getJSON(urlHRV, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntHRV = population;
    });

    //CYPRUS
    $.getJSON(urlCYP, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntCYP = population;
    });

    //CZECH REPUBLIC
    $.getJSON(urlCZE, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntCZE = population;
    });

    //DENMARK
    $.getJSON(urlDNK, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntDNK = population;
    });

    //ESTONIA
    $.getJSON(urlEST, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntEST = population;
    });

    //FINLAND
    $.getJSON(urlFIN, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntFIN = population;
    });

    //FRANCE
    $.getJSON(urlFRA, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntFRA = population;
    });

    //GEORGIA
    $.getJSON(urlGEO, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntGEO = population;
    });

    //GERMANY
    $.getJSON(urlDEU, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntDEU = population;
    });

    //GREECE
    $.getJSON(urlGRC, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntGRC = population;
    });

    //HUNGARY
    $.getJSON(urlHUN, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntHUN = population;
    });

    //ICELAND
    $.getJSON(urlISL, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntISL = population;
    });


    //IRELAND
    $.getJSON(urlIRL, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntIRL = population;
    });

    //ITALY
    $.getJSON(urlITA, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntITA = population;
    });

    //KAZAKHSTAN
    $.getJSON(urlKAZ, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntKAZ = population;
    });

    //LATVIA
    $.getJSON(urlLVA, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntLVA = population;
    });

    //LITHUANIA
    $.getJSON(urlLTU, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;

        cntLTU = population;
    });

    //LUXEMBOURG
    $.getJSON(urlLUX, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntLUX = population;
    });

    //MALTA
    $.getJSON(urlMLT, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntMLT = population;
    });

    //MOLDOVA
    $.getJSON(urlMDA, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntMDA = population;
    });

    //MONTENEGRO
    $.getJSON(urlMNE, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntMNE = population;
    });

    //NETHERLANDS
    $.getJSON(urlNLD, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntNLD = population;
    });

    //NORWAY
    $.getJSON(urlNOR, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntNOR = population;
    });

    //POLAND
    $.getJSON(urlPOL, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntPOL = population;
    });

    //PORTUGAL
    $.getJSON(urlPRT, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntPRT = population;
    });

    //ROMANIA
    $.getJSON(urlROU, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntROU = population;
    });

    //RUSSIA
    $.getJSON(urlRUS, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntRUS = population;
    });

    //SERBIA
    $.getJSON(urlSRB, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntSRB = population;
    });

    //SLOVAKIA
    $.getJSON(urlSVK, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntSVK = population;
    });

    //SLOVENIA
    $.getJSON(urlSVN, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntSVN = population;
    });

    //SPAIN
    $.getJSON(urlESP, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntESP = population;
    });

    //SWEDEN
    $.getJSON(urlSWE, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntSWE = population;
    });

    //SWITZERLAND
    $.getJSON(urlCHE, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntCHE = population;
    });

    //TURKEY
    $.getJSON(urlTUR, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntTUR = population;
    });

    //UKRAINE
    $.getJSON(urlUKR, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntUKR = population;
    });

    //UNITED KINGDOM
    $.getJSON(urlGBR, function(result){
        var date = result.total_population.date;
        var population = result.total_population.population;
        
        cntGBR = population;
    });


        
    //Table SearchBar
    $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });


    
})





 /* Passar os valores dos contadores para o HTML */
 document.getElementById("cnt-all").innerHTML += cntALL.toLocaleString();
 document.getElementById("cnt-alb").innerHTML += cntALB.toLocaleString();
 document.getElementById("cnt-arm").innerHTML += cntARM.toLocaleString();
 document.getElementById("cnt-aut").innerHTML += cntAUT.toLocaleString();
 document.getElementById("cnt-aze").innerHTML += cntAZE.toLocaleString();
 document.getElementById("cnt-blr").innerHTML += cntBLR.toLocaleString();
 document.getElementById("cnt-bel").innerHTML += cntBEL.toLocaleString();
 document.getElementById("cnt-bih").innerHTML += cntBIH.toLocaleString();
 document.getElementById("cnt-bgr").innerHTML += cntBGR.toLocaleString();
 document.getElementById("cnt-hrv").innerHTML += cntHRV.toLocaleString();
 document.getElementById("cnt-cyp").innerHTML += cntCYP.toLocaleString();
 document.getElementById("cnt-cze").innerHTML += cntCZE.toLocaleString();
 document.getElementById("cnt-dnk").innerHTML += cntDNK.toLocaleString();
 document.getElementById("cnt-est").innerHTML += cntEST.toLocaleString();
 document.getElementById("cnt-fin").innerHTML += cntFIN.toLocaleString();
 document.getElementById("cnt-fra").innerHTML += cntFRA.toLocaleString();
 document.getElementById("cnt-geo").innerHTML += cntGEO.toLocaleString();
 document.getElementById("cnt-deu").innerHTML += cntDEU.toLocaleString();
 document.getElementById("cnt-grc").innerHTML += cntGRC.toLocaleString();
 document.getElementById("cnt-hun").innerHTML += cntHUN.toLocaleString();
 document.getElementById("cnt-isl").innerHTML += cntISL.toLocaleString();
 document.getElementById("cnt-irl").innerHTML += cntIRL.toLocaleString();
 document.getElementById("cnt-ita").innerHTML += cntITA.toLocaleString();
 document.getElementById("cnt-kaz").innerHTML += cntKAZ.toLocaleString();
 document.getElementById("cnt-lva").innerHTML += cntLVA.toLocaleString();
 document.getElementById("cnt-ltu").innerHTML += cntLTU.toLocaleString();
 document.getElementById("cnt-lux").innerHTML += cntLUX.toLocaleString();
 document.getElementById("cnt-mlt").innerHTML += cntMLT.toLocaleString();
 document.getElementById("cnt-mda").innerHTML += cntMDA.toLocaleString();
 document.getElementById("cnt-mne").innerHTML += cntMNE.toLocaleString();
 document.getElementById("cnt-nld").innerHTML += cntNLD.toLocaleString();
 document.getElementById("cnt-nor").innerHTML += cntNOR.toLocaleString();
 document.getElementById("cnt-pol").innerHTML += cntPOL.toLocaleString();
 document.getElementById("cnt-prt").innerHTML += cntPRT.toLocaleString();
 document.getElementById("cnt-rou").innerHTML += cntROU.toLocaleString();
 document.getElementById("cnt-rus").innerHTML += cntRUS.toLocaleString();
 document.getElementById("cnt-srb").innerHTML += cntSRB.toLocaleString();
 document.getElementById("cnt-svk").innerHTML += cntSVK.toLocaleString();
 document.getElementById("cnt-svn").innerHTML += cntSVN.toLocaleString();
 document.getElementById("cnt-esp").innerHTML += cntESP.toLocaleString();
 document.getElementById("cnt-swe").innerHTML += cntSWE.toLocaleString();
 document.getElementById("cnt-che").innerHTML += cntCHE.toLocaleString();
 document.getElementById("cnt-tur").innerHTML += cntTUR.toLocaleString();
 document.getElementById("cnt-ukr").innerHTML += cntUKR.toLocaleString();
 document.getElementById("cnt-gbr").innerHTML += cntGBR.toLocaleString();


 /*
 $(window).scroll(function() {
    if($(this).scrollTop() > 50)
    {
        $('.navbar').addClass('bg-dark');
    } else {
        $('.navbar').removeClass('bg-dark');
    }
});
*/

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

 

 

/*
    $('#list-tab a').on('click', function () {
        document.getElementById("cnt-alb").innerHTML = "MUDAR TEXTO";
    })
*/



