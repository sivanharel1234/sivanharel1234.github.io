var JsonPollock = require('jsonPollock');
window.onload = function () {
    debugger;
    const content = {
        "type": "vertical",
        "elements": [{
            "type": "image",
            "url": "http://assets/phone.jpg",
            "tooltip": "Great Phone!",
            "click": {
                "actions": [{
                    "type": "navigate",
                    "name": "Navigate to store via image",
                    "lo": 23423423,
                    "la": 2423423423
                }]
            }
        }]
    };
    const el = JsonPollock.render(content);
    document.getElementById('content').appendChild(el);
};
