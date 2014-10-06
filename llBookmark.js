

(function (chrome) {
    var host = location.protocol + '//' + location.host;

    if (location.hash == '#bookmark') {
        var savedId = parseInt(localStorage['bookmark']);
        if (!isNaN(savedId)) {
            location.href = host + '/' + savedId;
        } else alert('Aucun marque page enregistré');
    }
    var fileId = parseInt(document.location.pathname.substr(1));
    if (!isNaN(fileId)) {
        var nextItem = document.getElementsByClassName('report_file')[0];
        var container = nextItem.parentElement;

        var button = document.createElement("a");
        button.className = "bookmark";
        button.setAttribute("href", host + "1#bookmark");
        button.setAttribute("title", "Cliquez pour enregistrer le marque page / Glissez ce lien dans vos favoris pour revenir à ce fichier");
        button.setAttribute("style", 'background: url("' + chrome.extension.getURL("clock.png") + '") no-repeat;');

        container.insertBefore(button, nextItem);

        button.onclick = function () {
            localStorage.setItem('bookmark', fileId);
            return false;
        };
    }
})(chrome);