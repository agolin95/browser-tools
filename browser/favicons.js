var url = window.location.href;
var slash = url.lastIndexOf('/');
var dash = url.lastIndexOf('-');
var lang = url.substring(slash + 1, dash);
var icon = "https://raw.githubusercontent.com/agolin95/browser-tools/main/browser/icons/";

switch (lang) {
    //using icons from https://konpa.github.io/devicon/
    case "RUBY": icon += "ruby.png"; break;
    case "CDRIVER": icon += "c.png"; break;
    case "CXX": icon = "cxx.png"; break;
    case "MONGOCRYPT": icon = "c.png"; break;
    case "PYTHON": icon = "python.png"; break;
    case "PYMODM": icon += "python.png"; break;
    case "MOTOR": icon += "python.png"; break;
    case "PHPLIB": icon += "php.png"; break;
    case "PHPC": icon += "php.png"; break;
    case "GODRIVER": icon = "go.png"; break;
    case "CSHARP": icon = "csharp.png"; break;
    case "NODE": icon += "node.png"; break;
    case "JAVA": icon += "java.png"; break;
    case "SWIFT": icon += "swift.png"; break;
    case "RUST": icon += "rust.png"; break;
    case "KAFKA": icon += "kafka.png"; break;
    case "DRIVERS": icon += "dbx.png"; break;
}

window.addEventListener('load', function() {
    var favicon = document.querySelector('link[rel~="icon"]');
    var clone = favicon.cloneNode(!0);
    clone.href = icon;
    favicon.parentNode.removeChild(favicon);
    document.head.appendChild(clone);
}, false);