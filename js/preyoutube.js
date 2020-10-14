function interceptAndModifySubtitleRequest() {
    var xhrOverrideScript = document.createElement('script');
    xhrOverrideScript.type = 'text/javascript';
    xhrOverrideScript.innerHTML = `
  (function() {
    var XHR = XMLHttpRequest.prototype;
    var send = XHR.send;
    var open = XHR.open;
    XHR.open = function(method, url) {
        if (url.includes('timedtext')) {
  
                arguments[1] = url + "&tlang=" + window.ultimateVideotranslator.language; 
                console.log(arguments[1]);
                return open.apply(this, arguments);
        } else {
            return open.apply(this, arguments);
        }   
    }
  })();
  `;
    document.head.prepend(xhrOverrideScript);
}

function listentolang() {
    chrome.storage.onChanged.addListener(function(changes, namespace) {
        chrome.storage.sync.get(['storageSelectedLang'], function (settings) {
            let event = new CustomEvent("changelangconfig", {
                    detail: {
                        language: settings.storageSelectedLang,  
                    }
                }
            );
            document.dispatchEvent(event);
        });
    });

    chrome.storage.sync.get(['storageSelectedLang'], function (settings) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.innerHTML = `
  (function() {
        window.ultimateVideotranslator = {
            "language": "${settings.storageSelectedLang}",
        }
        document.addEventListener("changelangconfig", function(event) {
            window.ultimateVideotranslator = {
                "language": event.detail.language 
            }
        });
  })();
  `;
        document.head.prepend(script);
    });
}

function clickcap() { 

var CaptionButton = document.getElementsByClassName("ytp-subtitles-button")[0];
CaptionButton.click();
CaptionButton.click();
}

function checkForDOM() {
    if (document.body && document.head) {
        listentolang();
        interceptAndModifySubtitleRequest();
        clickcap();
    } else {
        requestIdleCallback(checkForDOM);
    }
}

requestIdleCallback(checkForDOM);
 




