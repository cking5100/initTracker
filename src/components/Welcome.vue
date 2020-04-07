<template>
    <div class="welcome"> 
        <h1> {{msg}} </h1>
        <a style="cursor: pointer; text-decoration: underline" v-on:click="navigate()">Navigate to HelloWorld</a>

    </div>
</template>



<script>
    import router from '../router'

    export default {
        name: 'Welcome',
        props: {
            msg: String
        },
        methods: {
            navigate(){
                router.go(-1)
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>