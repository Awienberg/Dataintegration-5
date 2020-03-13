'use strict';

let Ajax = {
    init() {
        this.ajaxobj = false;
        try {
            this.ajaxobj = new XMLHttpRequest();
        } catch(err) {
            window.alert(err.message + " Get yourself a browser ;)");
        }
    },

    getFile(url, callback) {
        try {
            this.ajaxobj.addEventListener('load', function(ev) {
                callback(ev);
            });
            this.ajaxobj.open("GET", url);
            this.ajaxobj.send("");
        } catch(err) {
            window.alert(err.message + 'WTF');
        }
    }
}

export {Ajax};
