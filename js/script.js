// set up text to print, each item in array is new line
var aText = new Array(
"$ cat jason_origin.txt", 
"$ cat jason_school.txt",
"$ cat jason_major.txt",
"$ cat jason_skills.txt",
"$ cat jason_interests.txt",
"$ cat jason_resume.txt",
"$ cat jason_GitHub.txt",
"$ cat jason_email.txt"    
);
var output = new Array(
'"Los Angeles, California"',
'"University of California, San Diego"',
'"Math & Computer Science"',
'["Java", "C/C++", "JavaScript", "HTML & CSS", "Bootstrap", "React", "React Native", "Redux", "Node.js", "Express"]',
'["Weightlifting", "Basketball", "Music", "Dance", "Movies", "Drawing"]',
"<a class='links' style='text-decoration: none;' href='../public/Jason_Chau_Resume.pdf'>Jason's Resume</a>",
"<a class='links' style='text-decoration: none;' href='https://github.com/jdc9870'>Jason's Github</a>",
"<a class='links' style='text-decoration: none;' href='mailto: jasondchau@gmail.com'>jasondchau@gmail.com</a>"
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iCurrentLength = aText[0].length; // the length of the text array
var pos;
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
var checkLastLine = 0; // counter to check for last line printed
var outputTime = 500; // time delay of output print out 


function yeet() {
    var typedtext = document.getElementById("typedtext");
    var newNode = document.createElement("div");
    newNode.innerHTML = output[output.length-1];
    typedtext.parentNode.insertBefore(newNode, typedtext.nextSibling);
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
            setTimeout("typewriter()", outputTime);
            checkLastLine++;
        }   
    } 
    else {   
        setTimeout("typewriter()", iSpeed);
        if (checkLastLine == aText.length-1 && iTextPos == iCurrentLength) {
            setTimeout(function() {yeet();}, outputTime);
        }
    }   
}
typewriter();