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


function Create_matrix(){
    var column = document.querySelector('#Lmatrix_row').value;
    var row = document.querySelector('#Lmatrix_column').value;
    var INNERHTML = '';
    
    INNERHTML += '<button onclick="Create_matrix_result()">행렬 만들기</button>';
    INNERHTML += '<div></div>';
    INNERHTML += '<span>[</span>';
    for(var i =0; i<column;i++){
        
        INNERHTML += '<span>[</span>';
        for(var j =0; j<row;j++){
            INNERHTML += '<input type="text" class="Lmatrix-number" name="3" placeholder="입력">';
            if(j+1!=row)INNERHTML += '<span>,</span>';
        }
        INNERHTML += '<span>]</span>';
        if(i+1!=column){
            INNERHTML += '<span>,</span>';
            INNERHTML += '<span style="display:block;"></span>';
        }
    }
    INNERHTML += '<span>]</span>';

    document.querySelector('#Lmatrix_create-result').innerHTML= INNERHTML;
}
function Create_matrix_result(){
    var INNERHTML = '';
    INNERHTML += '<button onclick="paste();">계산기삽입</button>';
    INNERHTML += '<button onclick="copyToClipboard(Create_matrixtext());">복사하기</button>';
    INNERHTML += '<div></div>';
    INNERHTML += '<span id="matrix_result-text">'+Create_matrixtext()+'</span>';
    document.querySelector('#Lmatrix_create-result').innerHTML= INNERHTML;
}

function Create_matrixtext(){
    var divP = document.querySelector('#Lmatrix_create-result').children;
    var TotalText = '';
    for(var i=0; i<divP.length;i++){
        if(divP[i].tagName.toLowerCase() == 'span'){
            TotalText += divP[i].innerText;
        } else if(divP[i].tagName.toLowerCase() == 'input'){
            TotalText += divP[i].value;
        }
}

CalCOPY = TotalText;
return TotalText;
}

function paste(){
    if(document.querySelector('#result').innerText == '0') document.querySelector('#result').innerText ='';
    document.querySelector('#result').innerText += document.querySelector('#matrix_result-text').innerText;
    displayValue = document.querySelector('#result').innerText;
    initMath(displayValue)
}


function ShowMatrix(id){
    var Lmatrix = document.querySelector('.Lmatrix');
    if (Lmatrix.style.display == 'none'|| Lmatrix.style.display ==''){
        Lmatrix.style.display = 'block';
        PressMatrixStyle(id)
    } else {
        ShowmMatrixStyle(id)
        Lmatrix.style.display = 'none';
    }
}


function ShowmMatrixStyle(id){
    $('#'+id).css({
        'background-color': '',
        'box-shadow': '',
        'transform': ''
    });
}
function PressMatrixStyle(id){
    $('#'+id).css({
        'background-color': '#a1a1a1',
        'box-shadow': '0 5px #666',
        'transform': 'translateY(4px)'
    });
}


function helpPress(id){
    if(HELP_TRUE){
        HELP_TRUE =false;
        ShowmMatrixStyle(id);
    }else{
        HELP_TRUE = true;
        PressMatrixStyle(id);
    }
}

function helpTEXT(key){

    console.log(key);
    $('#result').text(key);
}