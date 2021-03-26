<template>
    <div>
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Hello',
    data() {
        return {
            msg: '',
        };
    },
    created() {
        axios.get('http://127.0.0.1:5000/api/hello-world').then((res) => {
            console.log(res);
            this.msg = res.data.msg;
        });
    },
};
</script>
