Vue.component('todo-item',{
    props: ['item'],
    template: '<li><span>{{item.text}}</span><button v-on:click="$emit(\'delete-item\',item.key)">X</button></li>',
});
new Vue({
    el: '#app',
    data: {
        newItem: '',
        counter: 0,
        items: []
    },
    methods: {
        addItem: function() {
            if(this.newItem.length) {
                this.items.push({
                    text: this.newItem.toString(),
                    key: this.counter++
                });
                this.newItem = '';
            }
        },
        removeItem: function(key) {
            let i = getIndex(this.items,key);
            this.items.splice(i,1);
        }
    }
});

const getIndex = (arr, key) => {
    for(let x=0;x<arr.length;x++) {
        if(arr[x].key==key){
            return x;
        }
    }
    return false;
};
