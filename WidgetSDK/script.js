new Vue({
    el: '#app',
    data: {
        agentMessagesValue:0,
        consumerMessagesValue:0,
        agentNote:"",
        visitorId:""
    },
    methods: {
        updateMessagesData: function(data){
            if(data && data.newValue){
                var i;
                for(i = 0; i < data.newValue.length; i++){
                    if(data.newValue[i].source === "agent") {
                        this.agentMessagesValue++;
                    }
                    else if(data.newValue[i].source === "visitor") {
                        this.consumerMessagesValue++;
                    }
                }
            }
        },
        onSendNotificationClicked: function() {
            alert("save agent note to local storage");
            const noteStore = `${'LEAgentNote'}${this.visitorId}`;
            localStorage.setItem(noteStore, this.agentNote);
        },
        setAgentNote: function(data) {
            debugger;
            if(data && data.newValue){
                this.visitorId = data.newValue;
                const noteStore = `${'LEAgentNote'}${this.visitorId}`;
                this.agentNote = localStorage.getItem(noteStore) || "";
            }
        }

    },
    computed: {
        getQueryParamsDetails() {
            const paramsString = location.search;
            const searchParams = new URLSearchParams(paramsString);
            const result = [...searchParams];
            return result;
        }
    },
    created(){
        lpTag.agentSDK.init({});
        lpTag.agentSDK.bind("chatTranscript.lines", this.updateMessagesData);
        lpTag.agentSDK.bind("visitorInfo.visitorId", this.setAgentNote);
    }
});