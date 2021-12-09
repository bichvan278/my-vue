<template>
<nav class="navbar navbar-expand-sm bg-light navbar-light">
  <ul class="navbar-nav">
    <li class="nav-item active">
      <a class="navbar-brand" href="#">
        <img src="@/assets/logo1.png" style="width:35px">
      </a>
    </li>
    <li class="nav-item active">
      <a class="nav-link" href="#">
            <router-link :to="{name: 'HelloWorld'}">
              Home
            </router-link>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#">Disabled</a>
    </li>
  </ul>
</nav>
</template>

<script>
export default {
  name: 'pageHeader'
}
</script>

<style>
img{
  background-image:none;
  margin-right: 20px;
  margin-top: 10px;
  margin-left: 20px;
}
.navbar{
  background-color:#d8f1fb;
  background-image: linear-gradient(to right,#d8f1fb, #7a73e2,#eb437e);
  margin-bottom: 10px;
  height: 40px;
}
a{
    color: #eb437e;
    text-decoration: none;
    margin-top: 10px;
}
</style>
