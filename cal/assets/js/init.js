$(document).ready(function(){
    locallist();
    function keyPressD(e){
            if(displayValue == '0') displayValue = '';

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
                var node = math.parse(displayValue);
                var latex = node.toTex({parenthesis: 'keep', implicit: 'hide'});
                var elem = MathJax.Hub.getAllJax('latex')[0];
                MathJax.Hub.Queue(['Text', elem, latex]);   
                }
                catch (e)
                {
                    displayValue = '0';
                    if(displayValue != 'function')
                    {
                        $('#result').text(e);
                    }
                }               
            } else {
                if($(this).text() == 'CL')
                {
                    displayValue = '0';
                    $('#result').text(displayValue);
                }else if($(this).text() == '←') {
                    const DisSplit = displayValue.split('');
                    DisSplit.pop();
                    const DisJoin = DisSplit.join('');
                    displayValue = DisJoin;
                    $('#result').text(displayValue);
                }else
                {                        
                    displayValue += $(this).text();
                    $('#result').text(displayValue);
                }

                var node = math.parse(displayValue);
                var latex = node.toTex({parenthesis: 'keep', implicit: 'hide'});
                var elem = MathJax.Hub.getAllJax('latex')[0];
                MathJax.Hub.Queue(['Text', elem, latex]);                      
            }

            e.preventDefault()
        }
    
    $(document).keypress(function (e) {
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

    $(document).keydown(function (e) {
        var charCode = e.which;
        console.log(charCode);
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