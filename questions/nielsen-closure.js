function getData() {
    var data = [1, 2, 3, 4, 5];
    var result = [];
    for (var i = 0; i < data.length; i++) {
        let item = 'item' + data[i];
        result.push(() => alert(item + ': ' + i));
    }

    return result;
}

function a() {
    var data = getData();
    for (var i = 0; i < data.length; i++) {
        data[i]();
    }
}

a();