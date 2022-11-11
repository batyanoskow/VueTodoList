<template>
    <div class="header">
        <nav class="navbar navbar-light bg-dark">
            <div class="container">
                 <a class="navbar-brand" href="#">
                    <img src="../assets/logo.jpeg" alt="" width="60" height="60">
                 </a>
                 <ul class="nav justify-content-end">
                    <!-- <router-link to="/"  active-class="active" class="nav-item">
                        <p class="nav-link text-light">Home</p>
                    </router-link>
                    <router-link to="/create"  active-class="active" class="nav-item">
                        <p class="nav-link text-light">Create</p>
                    </router-link> -->
                    <!-- <router-link/> --> -->
                    <li class="nav-item">
                        <a class="nav-link text-light" href="/">Home</a>
                     </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="/create">CreateToDo</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>                                                                                         
<script>
export default {
    name : "HeaderVue",
}
</script>
<style lang="scss">
    // .active{
    //     color: red;
    // }
</style>