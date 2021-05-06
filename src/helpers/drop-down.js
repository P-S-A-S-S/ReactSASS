const endpoints = document.getElementById('endpoints');
const commands = document.getElementById('commands');
//const output = document.getElementById('output');

endpoints.addEventListener('click', function(){
    var tag = endpoints.parentNode.children[1];
    console.log(tag.id);
    if(tag.id == '') {
        tag.id = "openEndpointsDiv";
        console.log("Now: " + tag.id);
    } else {
        tag.id = '';
        console.log("Is defined, now: " + tag.id);
    }
    
});

commands.addEventListener('click', function(){
    var tag2 = commands.parentNode.children[1];
    console.log(tag2.id);
    if(tag2.id == '') {
        tag2.id = "openCommandsDiv";
        console.log("Now: " + tag2.id);
    } else {
        tag2.id = '';
        console.log("Is defined, now: " + tag2.id);
    }
    
});

output.addEventListener('click', function(){
    var tag2 = output.parentNode.children[1];
    console.log(tag2.id);
    if(tag2.id == '') {
        tag2.id = "openOutputDiv";
        console.log("Now: " + tag2.id);
    } else {
        tag2.id = '';
        console.log("Is defined, now: " + tag2.id);
    }
    
});