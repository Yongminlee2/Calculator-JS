var localKey = "localkey";
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
    var INNERHTML = `<div class="save-results_remove" onclick="localAllremove()">전체삭제</div>`;

        if (localData === null){
        INNERHTML+=  `<div class="save-result">
                        <span class="save-result_value">empty</span>
                        <span class="save-result_replay">재사용</span>
                        <span class="save-result_remove">삭제</span>
                    </div>`;
        } else{
            for(var i=localData.length-1; i>=0;i--){
                INNERHTML += `<div class="save-result">
                                <span class="save-result_value">${localData[i]}</span>
                                <span class="save-result_replay" onclick="Recycling(${i})">재사용</span>
                                <span class="save-result_remove" onclick="localremove(${i})">삭제</span>
                            </div>`; 
            }
        }
        document.querySelector('.save-results').innerHTML = INNERHTML;
}

function localAllremove(){
    localStorage.removeItem(localKey);
    locallist();
}