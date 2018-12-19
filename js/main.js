var data = [
  { 
    action: 'type',
    strings: ["npm install -g mimik^400"],
    output: '<span class="gray">+mimik@0.10.2 installed</span><br>&nbsp;',
    postDelay: 1000
  },
  { 
    action: 'type',
    strings: ["cd tests^400"],
    output: ' ',
    postDelay: 1000
  },
  { 
    action: 'type',
    //clear: true,
    strings: ['mimik run^400'],
    output: $('.mimik-run-output').html()
  },
  { 
    action: 'type',
    strings: ["that was easy!", ''],
    postDelay: 2000
  }
  
];

function runScripts(data, pos) {
    var prompt = document.getElementById("typedtext"),
        script = data[pos];
    switch(script.action) {
        case 'type':
          // cleanup for next execution
          prompt.removeData();
          document.getElementById("typed-cursor").textContent = '';        
          prompt.typed({
            strings: script.strings,
            typeSpeed: 30,
            callback: function() {
              var history = document.getElementById("history").innerHTML;      
              history = history ? [history] : [];
              history.push('$ ' + prompt.textContent);
              if(script.output) {
                history.push(script.output);
                prompt.innerHTML = '';  
                document.getElementById("history").innerHTML += '<br/>';
                //$('.history').html(history.join('<br>'));
              }
              // scroll to bottom of screen
              //$('section.terminal').scrollTop($('section.terminal').height());
                document.getElementById("section.terminal").scrollTop(document.getElementById("section.terminal").height);    
              // Run next script
              pos++;
              if(pos < data.length) {
                setTimeout(function() {
                  runScripts(data, pos);
                }, script.postDelay || 1000);
              }
            }
          });
          break;
    }
}
runScripts(data, 0);
