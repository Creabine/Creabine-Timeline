function CreabineTimeline(options){
    if (!options.root) {
        throw "require root to this CreabineTimeline";
    }
    if (!options.itemList) {
        throw "require itemList to this CreabineTimeline";
    }
    var _itemList = options.itemList;
    var _endWords = options.endWords;
    var _startDirectionLeft = options.startDirectionLeft || true;
    var _root = document.getElementById(options.root);
    var _hr = null;
    function initElements() {
    	if (!_root) {
            throw "no exist called this name element,please create element called this name";
        }
        _root.className = "Creabine-TimeLine";
        for (var i = 0; i < _itemList.length; i++) {
            var _item = document.createElement("div");
            _item.className = "TimeLine-Item";
            var _contentLeft = document.createElement("div");
            var _contentRight = document.createElement("div");
            _contentLeft.className = "Item-Content";
            _contentRight.className = "Item-Content";
            _startDirectionLeft ? _contentRight.style.visibility = "hidden" : _contentLeft.style.visibility = "hidden";
            for (var j = 0; j < _itemList[i].contentList.length; j++) {
                var leftP = document.createElement("p");
                var rightP = document.createElement("p");
                leftP.innerText = _itemList[i].contentList[j];
                rightP.innerText = _itemList[i].contentList[j];
                _contentLeft.appendChild(leftP);
                _contentRight.appendChild(rightP);
            }
            var _itemTime = document.createElement("div");
            if( _startDirectionLeft ){
                if( i%2 == 0 ){
                    _itemTime.className = "Item-Time left";
                }else{
                    _itemTime.className = "Item-Time right";
                }
            }else{
                if( i%2 == 1 ){
                    _itemTime.className = "Item-Time right";
                }else{
                    _itemTime.className = "Item-Time left";
                }
            }
            _itemTime.innerText = _itemList[i].time;
            _item.appendChild(_contentLeft);
            _item.appendChild(_itemTime);
            _item.appendChild(_contentRight);
            _root.appendChild(_item);

            //startDirectionLeft
            if( _startDirectionLeft ){
                if( i%2 == 0 ){
                    _contentLeft.style.visibility = "visible";
                    _contentRight.style.visibility = "hidden";
                }else{
                    _contentLeft.style.visibility = "hidden";
                    _contentRight.style.visibility = "visible";
                }
            }else{
                if( i%2 == 0 ){
                    _contentLeft.style.visibility = "hidden";
                    _contentRight.style.visibility = "visible";
                }else{
                    _contentLeft.style.visibility = "visible";
                    _contentRight.style.visibility = "hidden";
                }
            }
        }
        // Tiemline
        var _timeLine = document.createElement("div");
        _timeLine.className = "TimeLine";
        var _fakerDiv1 = document.createElement("div");
        var _fakerDiv2 = document.createElement("div");
        _fakerDiv1.className = "Item-Content";
        _fakerDiv1.style.visibility = "hidden";
        _fakerDiv1.innerText = "Create by Creabine 2017.02.10";
        _fakerDiv2.className = "Item-Content";
        _fakerDiv2.style.visibility = "hidden";
        _fakerDiv2.innerText = "Create by Creabine 2017.02.10";
        var _hrDiv = document.createElement("div");
        _hrDiv.className = "TimeLine-Line";
        _hr = document.createElement("hr");
        _hrDiv.appendChild(_hr);
        _timeLine.appendChild(_fakerDiv1);
        _timeLine.appendChild(_hrDiv);
        _timeLine.appendChild(_fakerDiv2);
        _root.appendChild(_timeLine);  
        // TimeLine-End
        if(_endWords){
            var _endWordsDiv = document.createElement("div");
            _endWordsDiv.className = "TimeLine-End";
            _endWordsDiv.innerText = _endWords;
            _root.appendChild(_endWordsDiv); 
        }
        calculateHR();   
    }
    function calculateHR(){
        var _rootHeight = _root.offsetHeight;
        _hr.style.height = (_rootHeight) +'px';
        _hr.style.bottom = (_rootHeight) +'px';
    }
    
    initElements();
    window.onresize = function(){
        calculateHR();
    }
}