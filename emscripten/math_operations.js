// WebAssemblyモジュールをロード
var moduleInstance = Module();
moduleInstance.then(function(instance) {
    console.log("WebAssembly module initialized.");

    // ボタンを有効にする
    document.querySelector('button').disabled = false;

    // execute関数を定義
    window.execute = function() {
        var a = parseInt(document.getElementById('inputA').value);
        var b = parseInt(document.getElementById('inputB').value);
        var operation = document.getElementById('operation').value;
        var result;

        // 選択された演算に応じてC++関数を呼び出す
        if (operation === 'add') {
            result = instance._add(a, b);
        } else if (operation === 'subtract') {
            result = instance._subtract(a, b);
        } else if (operation === 'multiply') {
            result = instance._multiply(a, b);
        } else if (operation === 'divide') {
            result = instance._divide(a, b);
        }

        document.getElementById('result').innerText = result;
    };
});
