var CalCOPY = '';
var HELP_TRUE = false;

function initMath(displayValue){
    var node = math.parse(displayValue);
    var latex = node.toTex({parenthesis: 'keep', implicit: 'hide'});
    var elem = MathJax.Hub.getAllJax('latex')[0];
    MathJax.Hub.Queue(['Text', elem, latex]);
}

$(document).ready(function(){
    $("#result").attr("tabindex", -1).focus();
    locallist();
    
    function keyPressD(e){
        if(HELP_TRUE){
            var abcd = $(this).text();
            helpTEXT(abcd);
        }else{
            if(displayValue == '0') displayValue = '';
            if(document.querySelector('#result').innerText == '0') document.querySelector('#result').innerText = '';

            if($(this).text() == 'EV')
            {
                displayValue = document.querySelector('#result').innerText;
                localsave(displayValue);
                locallist();
                try
                {
                    displayValue = parser.eval(displayValue).toString();
                    var tokens = displayValue.split(' ');
                    if(tokens[0] == 'function')
                    {
                        displayValue = tokens[0];
                    }
                    $('#result').text(displayValue);                        
                    initMath(displayValue)
                }
                catch (e)
                {
                    displayValue = '0';
                    if(displayValue != 'function')
                    {
                        $('#result').text(e);
                    }
                }               
            }else if($(this).text() === 'copy'){
                    CalCOPY = $('#result').text();
                    copyToClipboard(CalCOPY);

            }else if($(this).text() === 'paste'){
                if(document.querySelector('#result').innerText == '0') document.querySelector('#result').innerText ='';
                document.querySelector('#result').innerText += CalCOPY;
                displayValue = document.querySelector('#result').innerText;
                initMath(displayValue)

            }else{
                if($(this).text() == 'CL')
                {
                    displayValue = '0';
                    $('#result').text(displayValue);
                }else if($(this).text() == '←') {
                    displayValue = $('#result').text();
                    const DisSplit = displayValue.split('');
                    DisSplit.pop();
                    const DisJoin = DisSplit.join('');
                    displayValue = DisJoin;
                    $('#result').text(displayValue);
                }else
                {              
                    displayValue = document.querySelector('#result').innerText;          
                    displayValue += $(this).text();
                    $('#result').text(displayValue);
                }
                initMath(displayValue)                    
            }

            e.preventDefault()
        }
    }
    
    //모든 키를 누를경우 아래 함수를 탄다
    $('#result').keypress(function (e) {
        var charCode = e.which; //번호
        var key2 = String.fromCharCode(charCode);
        if(charCode != 13 && charCode != 8){
            $('.key').each(function(index, key) {
                if(key.innerText == key2){
                    $(key).trigger('click');
                }
            });
        }

    });

    //백스페이스 , EV 를 누를경우  아래함수탄다
    $('#result').keydown(function (e) {
        var charCode = e.which;
        //아스키 코드 알아내기 console.log(charCode);
        if ( charCode === 8 ) {
            $('.key').each(function(index, key) {
                if(key.innerText == '←'){
                    $(key).trigger('click');
                }
            });
        }else if ( charCode === 13 ) {
            $('.key').each(function(index, key) {
                if(key.innerText == 'EV'){
                    $(key).trigger('click');
                }
            });
        }
    });

    var parser = math.parser();

    var displayValue = '0';
    $('#result').text(displayValue);
    $('#latex').html('$$' + math.parse(displayValue).toTex() + '$$');

    $('.key').each(function(index, key){
        $(this).click(keyPressD);
    })
})