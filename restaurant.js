//Once the page has loaded, it should show an alert and change the background grey
$( function (){
    alert("Your page has loaded");
    $('html').css("background-color","#DCDCDC");
});

//Changing a single paragraph's style
$('#our-people-txt').css("font-style","italic");


//Fading out any object that is clicked on
//Listing the types of objects in my site that should fade out
let tags = ["p","div","img","h1","h2"]
//Looping through these objects to apply click events to them
tags.forEach(fadeOut);
//Function to fade out the element by clicking it
function fadeOut(tag) {
    $(document).on('click', tag, function(evt) {
    $(this).fadeOut();
    });
}

//Creating a drop-down menu with accordion style when each section is hovered over.
//https://www.learningjquery.com/2015/10/using-jquery-to-create-a-drop-down-menu

$(document).ready(function(){ 
    $("#menu li").hover(function() { 
        $(".dropdown-menu", this).slideDown(100); 
    }, 
    function() { 
        $(".dropdown-menu", this).stop().slideUp(100); 
    }); 
});

//Fading the picture in:
$("#fade-in-button").click(function() {
    $("#our-people-img").fadeIn(3000);
});

//Fading picture out:
$("#fade-out-button").click(function() {
    $("#our-people-img").fadeOut(3000);
});

//Pausing the fade animation:
$("#fade-pause-button").click(function() {
    $("#our-people-img").stop();
});

//Sliding elements around and changing background color:
//Selecting a few elements to apply this to:
let paragraphsAndImages = ['section','img']
//Upon click, looping through those elements:
$(document).on("click","#slide-button", function(){
    paragraphsAndImages.forEach(slideStuff);
});
//Function to slide plus change the item's background color
function slideStuff(x) {
    $(x).css("background-color","#C0C0C0").slideToggle(500);
};

