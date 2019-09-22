function getAllElementAndNum() {
    var allElement = document.getElementsByTagName("*");
    var obj = {};
    for (var i = 0; i < allElement.length; i++) {
        if (!obj[allElement[i].tagName]) {
            obj[allElement[i].tagName] = 1;
        } else {
            obj[allElement[i].tagName] += 1;
        }
    }
    return obj;
}