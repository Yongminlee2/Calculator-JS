var localKey = 'localkey';
function localsave(text){
    var localData = JSON.parse(localStorage.getItem(localKey));

    if (localData === null){
        localData = [text];
        localStorage.setItem(localKey,  JSON.stringify(localData));
    } else{
        localData.push(text);
        localStorage.setItem(localKey, JSON.stringify(localData));
    }
}

function localremove(number){
    var localData = JSON.parse(localStorage.getItem(localKey));
    localData.splice(number,1);
    localStorage.setItem(localKey, JSON.stringify(localData));
    locallist();
}

function Recycling(number){
    var localData = JSON.parse(localStorage.getItem(localKey));
    document.querySelector('#result').innerText = localData[number];
}

function locallist(){
    var localData = JSON.parse(localStorage.getItem(localKey));
    var INNERHTML = '';

        if (localData === null){
        INNERHTML+=  '<div class="save-result">';
        INNERHTML+=        '<span class="save-result_value">empty</span>';
        INNERHTML+=        '<span class="save-result_replay create-ma">재사용</span>';
        INNERHTML+=        '<span class="save-result_remove2 create-ma">삭제</span>';
        INNERHTML+=  '</div>';
        } else{
            for(var i=localData.length-1; i>=0;i--){
                INNERHTML += '<div class="save-result">';
                INNERHTML +=               '<span class="save-result_value">'+localData[i]+'</span>';
                INNERHTML +=              '<span class="save-result_replay create-ma" onclick="Recycling('+i+')">재사용</span>';
                INNERHTML +=             '<span class="save-result_remove2 create-ma" onclick="localremove('+i+')">삭제</span>';
                INNERHTML +=     '</div>'; 
            }
        }
        document.querySelector('.save-result-scroll').innerHTML = INNERHTML;
}

function localAllremove(){
    localStorage.removeItem(localKey);
    locallist();
}

function historySave(){
    var text = document.querySelector('#save-results_input').value;
    localsave(text);
    locallist();
}