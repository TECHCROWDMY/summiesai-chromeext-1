(()=>{"use strict";chrome.runtime.onInstalled.addListener((function(t){"install"===t.reason&&chrome.tabs.create({url:"https://glasp.co/welcome-to-youtube-summary"})}));let t="";chrome.runtime.onMessage.addListener((function(e,o,n){if("setPrompt"===e.action)t=e.prompt,n();else if("getPrompt"===e.action)n({prompt:t}),t="";else if("openOptions"===e.action){const t=chrome.runtime.getURL("options/options.html");chrome.tabs.create({url:t}),n()}})),chrome.action.onClicked.addListener((function(t){const e=chrome.runtime.getURL("options/options.html");chrome.tabs.create({url:e})}))})();