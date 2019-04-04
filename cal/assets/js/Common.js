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
    $('#result').text(valText);
    var node = math.parse(valText);
                var latex = node.toTex({parenthesis: 'keep', implicit: 'hide'});
                var elem = MathJax.Hub.getAllJax('latex')[0];
                MathJax.Hub.Queue(['Text', elem, latex]);    
}
