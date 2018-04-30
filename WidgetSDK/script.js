new Vue({
    el: '#app',
    data: {
        agentMessagesValue:0,
        consumerMessagesValue:0
    },
    methods: {
        updateData: function(data){
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
            alert("Submit");
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
        lpTag.agentSDK.bind("chatTranscript.lines", this.updateData);
    }
});