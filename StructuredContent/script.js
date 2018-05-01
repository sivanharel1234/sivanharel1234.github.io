var content;
window.onload = function () {
    lpTag.agentSDK.init({});
    content = {
        "type": "vertical",
        "elements": [



        {
            "type": "text",
            "text": "Choose your iphone",
            "tooltip": "text tooltip",
            "style": {
                "bold": true,
                "size": "large",
                "color": "#3E47A0"
            }
        },



        {
            "type": "carousel",
            "padding": 0,
            "elements": [


                {
                    "type": "vertical",
                    "elements": [

                        {
                            "type": "text",
                            "text": "iphone 5",
                            "tooltip": "iphone 5",
                            "rtl": false,
                            "style": {
                                "bold": false,
                                "italic": false,
                                "color": "#000000",
                                "size": "large"
                            }
                        },

                        {
                            "type": "image",
                            "url": "https://cdn2.gsmarena.com/vv/bigpic/apple-iphone-5se-ofic.jpg",
                            "tooltip": "iphone 5"
                        },

                        {
                            "type": "button",
                            "tooltip": "Choose this iphone",
                            "title": "Choose this iphone",
                            "click": {
                                "actions": [
                                    {
                                        "type": "publishText",
                                        "text": "iphone 5 was chose"
                                    }
                                ]
                            }
                        }
                    ]
                },


                {
                    "type": "vertical",
                    "elements": [

                        {
                            "type": "text",
                            "text": "iphone 6",
                            "tooltip": "iphone 6",
                            "rtl": false,
                            "style": {
                                "bold": false,
                                "italic": false,
                                "color": "#000000",
                                "size": "large"
                            }
                        },

                        {
                            "type": "image",
                            "url": "https://cdn2.gsmarena.com/vv/bigpic/apple-iphone-6s1.jpg",
                            "tooltip": "iphone 5"
                        },

                        {
                            "type": "button",
                            "tooltip": "Choose this iphone",
                            "title": "Choose this iphone",
                            "click": {
                                "actions": [
                                    {
                                        "type": "publishText",
                                        "text": "iphone 6 was chose"
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    "type": "vertical",
                    "elements": [

                        {
                            "type": "text",
                            "text": "iphone x",
                            "tooltip": "iphone x",
                            "rtl": false,
                            "style": {
                                "bold": false,
                                "italic": false,
                                "color": "#000000",
                                "size": "large"
                            }
                        },

                        {
                            "type": "image",
                            "url": "https://cdn2.gsmarena.com/vv/bigpic/apple-iphone-x.jpg",
                            "tooltip": "iphone X"
                        },

                        {
                            "type": "button",
                            "tooltip": "Choose this iphone",
                            "title": "Choose this iphone",
                            "click": {
                                "actions": [
                                    {
                                        "type": "publishText",
                                        "text": "iphone x was chose"
                                    },
                                    {
                                        "type": "link",
                                        "uri": "https://www.apple.com/iphone/",
                                        "name": "open browser"
                                    }
                                ]
                            }
                        }
                    ]
                }

            ]
        },



        {
            "type": "text",
            "text": "Made by Sivan Harel",
            "tooltip": "text tooltip",
            "style": {
                "bold": true,
                "size": "large",
                "color": "#3E47A0"
            }
        }

    ]
    };

    JsonPollock.registerAction('publishText', (data) => {
        alert(data);
    });

    const el = JsonPollock.render(content);
    document.getElementById('content').appendChild(el);
};

function sendText(){
    var notifyWhenDone = function(err) {
        if (err) {
            // Do something with the error
            console.log(err);
        }
        // called when the command is completed successfully,
        // or when the action terminated with an error.
    };
    var cmdName = lpTag.agentSDK.cmdNames.write;
    var data = {text: "Hi, I am going to send you a list of iphones, choose one"};
    lpTag.agentSDK.command(cmdName, data, notifyWhenDone);
}
function sendSC(){
    var notifyWhenDone = function(err) {
        if (err) {
            // Do something with the error
            console.log(err);
        }
        // called when the command is completed successfully,
        // or when the action terminated with an error.
    };
    var cmdName = lpTag.agentSDK.cmdNames.writeSC;
    var data = {
      json:content
    };
    lpTag.agentSDK.command(cmdName, data, notifyWhenDone);
}
