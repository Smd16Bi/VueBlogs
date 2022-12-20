<template lang="">
    <div class="navbar">
        <div v-on:click="$router.push('/')">Post vue</div>
        <div class="navbar__items">
            <MyButton v-on:click="$router.push('/posts')">Post</MyButton>
            <MyButton v-on:click="$router.push('/about')">About</MyButton>
            <MyButton v-on:click="$router.push('/store')">Store</MyButton>
        </div>
    </div>
</template>
<script>
export default {
    name:"MyNavBar"
}
</script>
<style >
    .navbar {
        height: 50px;
        background-color: gray;
        box-shadow: 2px 2px 4px grey;
        display: flex;
        align-items: center;
        gap: 25px;
    }
    .navbar__items {
        margin-left: auto;
        display: flex;
        align-items: center;
        gap: 25px;
        cursor: pointer;
    }
</style>