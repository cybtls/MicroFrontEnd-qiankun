<template>
    <div id="main-app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">主应用的About</router-link>|
            <router-link to="/vue">Vue</router-link>|
            <router-link to="/react">React</router-link>
        </div>
        <router-view />
        <div id="qiankunVue"></div>
        <div id="qiankunReact"></div>
    </div>
</template>

<style lang="scss">
#main-app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
