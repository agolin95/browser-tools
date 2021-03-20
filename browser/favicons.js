var url = window.location.href;
var slash = url.lastIndexOf('/');
var dash = url.lastIndexOf('-');
var lang = url.substring(slash + 1, dash);
var icon = "https://raw.githubusercontent.com/agolin95/mongo-browser-tools/main/browser/icons";

switch (lang) {
    //using icons from https://konpa.github.io/devicon/
    case "RUBY": icon += "ruby.png"; break;
    case "CDRIVER": icon += "c/c-plain.svg"; break;
    case "CXX": icon = "https://tinyurl.com/y7pfmuch"; break;
    case "MONGOCRYPT": icon = "https://tinyurl.com/y7ovxbpu"; break;
    case "PYTHON": icon = "https://tinyurl.com/y2e7474j"; break;
    case "PYMODM": icon += "python/python-plain.svg"; break;
    case "MOTOR": icon += "python/python-plain.svg"; break;
    case "PHPLIB": icon += "php/php-plain.svg"; break;
    case "PHPC": icon += "php/php-plain.svg"; break;
    case "GODRIVER": icon = "https://tinyurl.com/yczoqmh9"; break;
    case "CSHARP": icon = "https://tinyurl.com/yakq8clv"; break;
    case "NODE": icon += "nodejs/nodejs-plain.svg"; break;
    case "JAVA": icon += "java/java-original.svg"; break;
    case "SWIFT": icon += "swift/swift-original.svg"; break;

    //unavailable in icon pack, using images from google search
    case "RUST": icon = "https://tinyurl.com/ya2gbac3"; break;
    case "KAFKA": icon = "https://tinyurl.com/ya5g8khk"; break;
    case "DRIVERS": icon = "https://tinyurl.com/yagqnok9"; break;
    case "SPEC": icon = " https://tinyurl.com/y79qobyz"; break;

}

window.addEventListener('load', function() {
    var favicon = document.querySelector('link[rel~="icon"]');
    var clone = favicon.cloneNode(!0);
    clone.href = icon;
    favicon.parentNode.removeChild(favicon);
    document.head.appendChild(clone);
}, false);