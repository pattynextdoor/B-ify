var elements = document.getElementsByTagName('*');
var Bstring = "<i class=\"em em-b\"></i>";
var Bobject = document.createElement('i');
Bobject.innerHTML = Bstring;
var htmlObject = Bobject.firstChild;

document.body.innerHTML+= "<link href= \"https://afeld.github.io/emoji-css/emoji.css\" rel=\"stylesheet\">";

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        //if plain text
        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/\sb/gi || /B/gi," " +  String.fromCodePoint(0x1F171));

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
