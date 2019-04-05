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
    if(valTextDiv == 0){
        valTextDiv = '';
    }
    valText = valTextDiv +valText;
    $('#result').text(valText);
    initMath(valText);
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