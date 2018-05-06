<template>
    <div class="sivan-widget">
        <input id="newPredefinedValue" placeholder="add new" v-model="newPredefinedText">
        <button id="newPredefinedValueButton" @click="addPredefinedContent">Add</button>
        <ul id="predefiend-content">
            <li v-for="item in predefinedContentArray" :key="item.id">
                <div id="value" @click="sendPredefinedContent(item)"> {{item.text}} </div>
                <button @click="deletePredefinedContent(item.id)">X</button>
            </li>
        </ul>

    </div>
</template>

<script>
    import agentSDK from '../agentSDK';

    const NOTE_STORAGE = 'LEPredefinedContentList';
    export default {
        name: 'sivan-widget',
        data() {
            return {
                newPredefinedText: '',
                predefinedContentArray: JSON.parse(localStorage.getItem(NOTE_STORAGE)) || [],
            };
        },
        methods: {
            addPredefinedContent() {
                this.predefinedContentArray.push({ id: new Date().getTime(), text: this.newPredefinedText });
                localStorage.setItem(NOTE_STORAGE, JSON.stringify(this.predefinedContentArray));
                this.newPredefinedText = '';
            },
            deletePredefinedContent(itemId) {
                let i;
                for (i = 0; i < this.predefinedContentArray.length; i += 1) {
                    if (this.predefinedContentArray[i] && this.predefinedContentArray[i].id === itemId) {
                        this.predefinedContentArray.splice(i, 1);
                    }
                }
                localStorage.setItem(NOTE_STORAGE, JSON.stringify(this.predefinedContentArray));
            },
            sendPredefinedContent(itemToSend) {
                const notifyWhenDone = function (err) {
                    if (err) {
                        console.log(err);
                    }
                };
                const cmdName = agentSDK.cmdNames.write;
                const data = { text: itemToSend.text };
                agentSDK.command(cmdName, data, notifyWhenDone);
            },
        },
    };
</script>

<style lang="scss" scoped>
    #newPredefinedValue{
        border: 2px solid gray;
        padding: 6px 79px 6px 0px;
        width: 250px;
        text-align: initial;
        font-size: 14px;
    }
    #newPredefinedValueButton{
        padding: 9px 6px;
    }
    ul{
        margin-top: 5px;
        list-style-type: none;
    }
    li {
        #value{
            display: inline-block;
            border: solid 2px gray;
            width: 330px;
            height: 22px;
            margin-bottom: 6px;
            margin-right: 4px;
            margin-left: -75px;
            padding: 1px 0;
        }
        button{
            padding: 6px 7px;
            position: fixed;
        }
    }
</style>
