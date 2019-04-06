function copyToClipboard(val) {
    var t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
    alert(val +'  내용이 클립보드에 저장되었습니다.');
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
    if(id=='LHistory'){
        var save_R = document.querySelector('.save-results').style.display;
        if(save_R=='block'){
            document.querySelector('.save-results').style.display ='none';
            $('.'+id).css({
                'background-color': '',
                'box-shadow': '',
                'transform': ''
            });
        }else {
            document.querySelector('.save-results').style.display ='block';
            $('.'+id).css({
                'background-color': '#6495ED',
                'box-shadow': '0 5px #666',
                'transform': 'translateY(4px)'
            });
        }
    }else {
        var ref = document.querySelector('#'+id).style.display;
        if(ref == 'flex') {
            document.querySelector('#'+id).style.display = 'none';
            $('.'+id).css({
                'background-color': '',
                'box-shadow': '',
                'transform': ''
            });
        }else {
            document.querySelector('#'+id).style.display = 'flex';
            $('.'+id).css({
                'background-color': '#6495ED',
                'box-shadow': '0 5px #666',
                'transform': 'translateY(4px)'
            });
            
        };
    }   
}