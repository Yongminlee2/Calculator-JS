function copyToClipboard(val) {
    var t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
}

function InputResult(){
    var valText = document.querySelector('#InputResult').value;
    var valTextDiv =  $('#result').text();
    valText = valTextDiv +valText;
    $('#result').text(valText);
    var node = math.parse(valText);
                var latex = node.toTex({parenthesis: 'keep', implicit: 'hide'});
                var elem = MathJax.Hub.getAllJax('latex')[0];
                MathJax.Hub.Queue(['Text', elem, latex]);    
}

function ShowFunction(id){
    var ref = document.querySelector('#'+id).style.display;
    if(ref == 'flex') {
        document.querySelector('#'+id).style.display = 'none';
        $('.'+id).css('animation','');
    }else {
        document.querySelector('#'+id).style.display = 'flex';
        $('.'+id).css('animation','rainbow 7s ease-in-out infinite');
    };
}