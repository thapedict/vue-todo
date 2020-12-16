new Vue({
    el: '#app',
    data: {
        newItem: '',
        items: []
    },
    methods: {
        addItem: function() {
            if(this.newItem.length) {
                this.items.push({
                    text: this.newItem.toString(),
                    key: this.items.length
                });
                this.newItem = '';
            }
        }
    }
});