<template>
  <h1>{{ propMessage }}</h1>
</template>

<script>
export default {
  name: "Hello",
    props: {
        propMessage: {
            type: String,
            default: "Default message from prop"
        }
    }
};
</script>
<style scoped>
h1{
    color:red;
    font-size: 12px;
}
</style>