$("#refreshButton").click(function(){
    let pics = document.querySelectorAll("div > img");
if (pics[1].className == "firstRoll"){
    for (let i=0; i<5; i++){
        pics[i].setAttribute("src", `secRoll/mosc${i+1}.jpg`);
        pics[i].className = "secRoll";
    }
} 
else if (pics[1].className == "secRoll"){
    for (let i=0; i<5; i++){
        pics[i].setAttribute("src", `thirdRoll/ca${i+1}.JPG`);
        pics[i].className = "thirdRoll";
    }
    $("#filter-1").html(" niagara falls ");
    $("#filter-2").html(" no niagara falls ");
} 
else {
    for (let i=0; i<5; i++){
        pics[i].setAttribute("src", `firstRoll/turkey${i+1}.JPG`);
        pics[i].className = "firstRoll";
    }
    $("#filter-1").html(" cat ");
    $("#filter-2").html(" no cat ");
}   
});