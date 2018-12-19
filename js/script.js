// set up text to print, each item in array is new line
var aText = new Array(
"$ cat jason_origin.txt", 
"$ cat jason_school.txt",
"$ cat jason_major.txt",
"$ cat jason_interests.txt"
);
var output = new Array(
"Los Angeles, California",
"University of California, San Diego",
"Math and Computer Science",
"Weightlifting, Basketball, Music, and Dance"
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iCurrentLength = aText[0].length; // the length of the text array
var pos;
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
var aLength = aText.length;
var i;
var j;
var count = 0;
for (i = 0; i < aLength; i++) {
    for (j = 0; j < aText[i].length; j++) {
        count++;
    }
}
var totalCount = (aLength*500)+(iSpeed*count) + 3000;

function yeet() {
    var typedtext = document.getElementById("typedtext");
    var newNode = document.createElement("div");
    newNode.innerHTML = output[3];
    typedtext.parentNode.insertBefore(newNode, typedtext.nextSibling);
}

function fkdis() {
    huehue = setTimeout(function() {yeet();}, totalCount);
}
function typewriter()
{
    sContents = ' ';
    iRow = 0;
    pos = 0;
    var typedtext = document.getElementById("typedtext");
 
    while ( iRow < iIndex ) {
        sContents += aText[iRow++] + '<br/>' + " " + output[pos++] + '<br/>' + '<br/>';
    }   
 
    typedtext.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     
    if ( iTextPos++ == iCurrentLength ) {
        iTextPos = 0;
        iIndex++;
        if ( iIndex != aText.length ) {
            iCurrentLength = aText[iIndex].length;  
            setTimeout("typewriter()", 500);
        }   
    } 
    else {   
        setTimeout("typewriter()", iSpeed);   
    }   
}
typewriter();
fkdis();