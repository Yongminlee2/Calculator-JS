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
    }else if(id=='CrossDet') {
        var ref = document.querySelector('#'+id).style.display;
        if(ref == 'flex') {
            document.querySelector('#'+id).style.display = 'none';
            $('.'+id).css({
                'background-color': '',
                'box-shadow': '',
                'transform': ''
            });
            ShowmMatrixStyle('ShowMatrix');
            var Lmatrix = document.querySelector('.Lmatrix');
                Lmatrix.style.display = 'none';

        }else {
            document.querySelector('#'+id).style.display = 'flex';
            $('.'+id).css({
                'background-color': '#6495ED',
                'box-shadow': '0 5px #666',
                'transform': 'translateY(4px)'
            });
            
        };
    }   else {
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
        $('#result').text('0');
        HELP_TRUE =false;
        ShowmMatrixStyle(id);
        $('#result').css({
            'display' : 'inline-flex',
            'font-size' : '20px'
        })
    }else{
        $('#result').text('도움말시작');
        HELP_TRUE = true;
        PressMatrixStyle(id);
        $('#result').css({
            'display' : 'block',
            'font-size' : '16px'
        })
    }
}

function helpTEXT(key){

    console.log(key);
    if (key == 'sin' || key=='cos' ||key =='tan'){
        key = 'sin, cos, tan : 괄호 안의 값을 삼각함수(sin, cos, tan)로 구해줍니다. 각도는 파이(pi)를 이용해서만 계산할 수 있습니다. ex) sin(pi/2) = 1';
    }else if(key =='exp'){key = 'exp : e의 거듭제곱을 의미합니다. 괄호 안의 값(x)를 지수로 하여 e^x를 계산해줍니다. ex) exp(2) = 7.38905...';
    }else if(key =='log'){key = 'log : log(x)로 사용하면 밑을 e로 하는 자연로그로 계산되고 log(x, y)로 사용하면 밑이 y로 계산됩니다. ex) log(e) = 1 / log(2, 3) = 0.630929...';
    }else if(key =='sqrt'){key = 'sqrt : 괄호 안의 값에 대한 제곱근을 계산해줍니다. ex) sqrt(16) = 4';
    }else if(key =='abs'){key = 'abs : 괄호 안에 입력한 값의 절댓값을 계산해줍니다. ex) abs(-2) = 2 ';
    }else if(key =='('||key ==')' ||key =='[' ||key ==']'){key = '괄호(소, 대) : 수식의 범위를 묶거나 우선순위를 설정하고 싶을 때 사용합니다.ex) ( , ) / [ , ]';
    }else if(key =='.'){key = '.(점) : 소수를 표현하는데 사용합니다. ex) 0.2+0.2 = 0.4';
    }else if(key ==','){key = ',(콤마) : 값들을 구분하는 개념으로 벡터나 행렬에서 사용합니다. ex) 벡터 내적에서는 [,]*[,] 구조로 행렬에서는 [[,],[,]] 구조로 사용됩니다.';
    }else if(key =='<'||key == '>'||key == '>='||key == '<='||key =='!='||key =='=='){key = '부등호(<, >, <=, >=, !=, ==) : 부등호 양 옆 피연산자의 크기를 비교하여 참(true)인지 거짓(false)인지 반환합니다. ==는 양 옆 피연산자가 같을 때 true이며, !=는 양 옆 피연산자가 다를 때 true입니다.';
    }else if(key =='i'){key = '복소수(i) : 제곱하면 -1인 복소수 i를 나타냅니다.';
    }else if(key =='e'){key = '오일러상수(e) : 자연로그의 밑(base)입니다. 근삿값으로 2.718281828459045가 입력됩니다.';
    }else if(key =='pi'){key = '파이(pi) : 원주율, 즉 원의 둘레와 지름의 비율을 나타내는 수학 기호입니다. 근삿값으로 3.141592653589793이 입력됩니다.';
    }else if(key =='w'||key =='x' ||key =='y'||key =='z'){key = '변수(w, x, y, z) : 변수를 만들어 계산에 이용할 수 있습니다. ex) x = 2라고 변수를 만들고 x를 계산하면 2가 나옵니다.';
    }else if(key =='f'||key =='g'){key = '함수(f, g) : 함수를 만들어 계산에 이용할 수 있습니다. ex) f(x) = x+2라고 함수를 만들고 f(2)를 계산하면 4가 나옵니다.';
    }else if(key =='cross'){key = '벡터외적(cross) : 괄호 안의 두 벡터의 외적을 구해줍니다. 벡터 값을 소괄호로 묶지 않으면 에러가 발생합니다. ex) cross([3,3,-1],[2,3,1]) => 정상적 계산 / cross[[3,3,-1],[2,3,1]] => 에러 발생';
    }else if(key =='det'){key = '행렬식(det) : 행렬식으로 대괄호를 사용하여 행렬을 표현합니다. n*n형식의 정방행렬로 구성되어야 합니다. ex) det([[3,2],[1,-4]]) = -14';
    }else if(key =='copy'||key =='paste'){key = 'copy/ paste : 계산 창에 입력된 수식을 복사/ 붙여넣기 합니다. ex) 계산 창에 2+3*5를 입력 후 copy 버튼을 클릭하면 복사되고 paste 버튼을 클릭하면 2+3*5가 붙여넣기 됩니다.';
    }else if(key == '0' || key =='1' || key =='2' || key =='3' || key =='4' || key =='5' || key =='6' || key =='7' || key =='8'|| key =='9'){key = '0~9 : 수식을 구성할 때 사용하는 숫자입니다.';
    }else if(key =='+'||key =='-'||key =='*'||key =='/'||key =='%'||key =='^'){key = '기본 연산자(+,-,*,/,%,^) : 순서대로 각각 덧셈, 뺄셈, 곱셈, 나눗셈(몫), 나눗셈(나머지), 제곱을 구합니다.  ex) 5 / 2 = 2  ,5 % 2, = 1 ,5^2 = 25';
    }else if(key =='←'){key = '<- : 계산 창의 문자 한개를 지웁니다.';
    }else if(key =='CL'){key = 'CL : 계산 창의 문자 전부를 지웁니다.';
    }else if(key =='EV'){key = 'EV : 계산 창에 입력된 수식을 계산하여 결과를 보여줍니다.';
    }else{}
    $('#result').text(key);
}