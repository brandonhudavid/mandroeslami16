////////////////////////////////////////////////////////////////////////////////
// shared code for escape button ///////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        modal.style.display = "none";
        modal2.style.display = "none";
    }
};

/////////////////////////////////////////////////////////////////////////
// modal 1 //////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

/////////////////////////////////////////////////////////////////////////
// modal 2 //////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

var modal2 = document.getElementById('myModal2');

var img2 = document.getElementById('myImg2');
var modalImg2 = document.getElementById("img02");
var captionText2 = document.getElementById("caption2");

img2.onclick = function(){
    modal2.style.display = "block";
    modalImg2.src = this.src;
    modalImg2.alt = this.alt;
    captionText2.innerHTML = this.alt;
};

var span2 = document.getElementsByClassName("close2")[0];

span2.onclick = function() {
    modal2.style.display = "none";
};

/////////////////////////////////////////////////////////////////////////
// modal 3 //////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
