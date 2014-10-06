

(function (chrome) {
    var host = location.protocol + '//' + location.host;

    if (location.hash == '#bookmark') {
        chrome.storage.sync.get('bookmark', function (r) {
            var bookmark = r.bookmark;
            if (!isNaN(bookmark)) {
                location.href = host + '/' + bookmark;
            } else alert('Aucun marque page enregistré');
        });
        
    }
    var fileId = parseInt(document.location.pathname.substr(1));
    if (!isNaN(fileId)) {
     
        var button = document.createElement("a");
        button.className = "bookmark";
        button.setAttribute("href", host + "/1#bookmark");
        button.setAttribute("title", "Cliquez pour enregistrer le marque page / Glissez ce lien dans vos favoris pour revenir au dernier fichier marqué");
        button.setAttribute("style", 'background: url("' + chrome.extension.getURL("clock.png") + '") no-repeat;');

        var container = document.getElementsByClassName('view_file')[0];
        container.appendChild(button);

        //If user is auth
        var reportButton = document.getElementsByClassName('report_file')[0];
        if (reportButton) button.style.right = "95px";
         
        
        button.onclick = function () {
            chrome.storage.sync.set({ 'bookmark': fileId }, function () {
                button.className = "bookmark success";
            });
            return false;
        };
    }
})(chrome);