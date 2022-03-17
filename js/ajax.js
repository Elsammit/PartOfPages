
var flg = true;

// ページの一部だけをreloadする方法
// Ajaxを使う方法
// XMLHttpRequestを使ってAjaxで更新
function Do_repetition() {
 
    // urlを加工し、キャッシュされないurlにする。
    url = "http://192.168.2.136:3000/aaa"
 
    // ajaxオブジェクト生成
    var ajax = new XMLHttpRequest;
 
    // ajax通信open
    ajax.open('GET', url, true);
 
    // ajax返信時の処理
    ajax.onload = function (data) {
        var repos = data.currentTarget.response;

        var div = document.getElementById('testA');

        if(repos == "0"){
            div.src = "../img/makewani.png";
        }else if(repos == "1"){
            div.src="../img/hamstar.png";
        }else{
            div.src="../img/mogura.png";
        }
    };
 
    // ajax開始
    ajax.send(null);
}
 
window.addEventListener('load', function () {
 
    setInterval(function () {
        Do_repetition();
    }, 500);
 
});