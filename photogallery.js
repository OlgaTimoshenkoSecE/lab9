

/* 
code below fires when button for updaing the library is clicked => 
    there are three conditions in total because my library has only three layout (6 pic per 1 layout)
    in every condition first of all i return pictures that might have been hidden by filter button;
    then, i iterate over src of pictures and change it & change the class which helps 
    the function determine what layout is displayed right now;
    somewhere i additionally change the filter button name
*/

$("#refreshButton").click(function(){
    let pics = document.querySelectorAll("div > img");
if (pics[1].className == "firstRoll"){
    $("#box-4").show();
    $("#box-5").show();
    $("#box-6").show();
    for (let i=0; i<6; i++){
        pics[i].setAttribute("src", `secRoll/mosc${i+1}.jpg`);
        pics[i].className = "secRoll";
    }
} 
else if (pics[1].className == "secRoll"){
    $("#box-2").show();
    $("#box-4").show();
    $("#box-5").show();
    for (let i=0; i<6; i++){
        pics[i].setAttribute("src", `thirdRoll/ca${i+1}.JPG`);
        pics[i].className = "thirdRoll";
    }
    $("#filter").html(" niagara falls filter");
} 
else {
    $("#box-1").show();
    $("#box-3").show();
    $("#box-4").show();
    $("#box-5").show();
    for (let i=0; i<6; i++){
        pics[i].setAttribute("src", `firstRoll/turkey${i+1}.JPG`);
        pics[i].className = "firstRoll";
    }
    $("#filter").html(" cat filter");
}   
});

/*
code below fires when user clicks on an image =>
    section of the code which represents the layout of the page when a picture is clicked shows up (display: inline);
    in this section the src of an image which was clicked gets embedded;
 */

$("div > img").on("click",function(event){
    $("#picture").css("display","inline");
    let picSource = event.target.getAttribute("src");
    $("#screenView").attr("src",picSource);
})

// code below reverses what the previous block of code does

$("#picture").on("click", function(){
    $("#picture").css("display","none");
})



let flicker = true; //flicker is used to determine whether it is the first time (true) a button gets clicked or second (false)

/*
code below fires when filter button is clicked first time (filter on) or second (filter off) =>
    my images do not have specific characteristics, so i picked them out manually and get them via id to fadeOut or fadeIn;
    this block of code also dependant on what layout is currently displayed on the page
 */

$("#filter").click(function(){
    if (flicker == true){
        if ( $("div > img").attr("class") == "firstRoll" ){
            $("#box-4").fadeOut(1000);
            $("#box-5").fadeOut(1000);
            $("#box-6").fadeOut(1000);
            flicker = false;
        }
        else if ($("div > img").attr("class") == "secRoll" ){
            $("#box-2").fadeOut(1000);
            $("#box-4").fadeOut(1000);
            $("#box-5").fadeOut(1000);
            flicker = false;
        }
        else {
            $("#box-1").fadeOut(1000);
            $("#box-3").fadeOut(1000);
            $("#box-4").fadeOut(1000);
            $("#box-5").fadeOut(1000);
            flicker = false;
        }
    }
    else if (flicker == false){
        if ( $("div > img").attr("class") == "firstRoll" ){
            $("#box-4").fadeIn(1000);
            $("#box-5").fadeIn(1000);
            $("#box-6").fadeIn(1000);
            flicker = true;
        }
        else if ($("div > img").attr("class") == "secRoll" ){
            $("#box-2").fadeIn(1000);
            $("#box-4").fadeIn(1000);
            $("#box-5").fadeIn(1000);
            flicker = true;
        }
        else {
            $("#box-1").fadeIn(1000);
            $("#box-3").fadeIn(1000);
            $("#box-4").fadeIn(1000);
            $("#box-5").fadeIn(1000);
            flicker = true;
        }
    }
    })





