<template>
  <div id="app">
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <span class="navbar-brand" href="">WebSiteName</span>
        </div>
        <ul class="nav navbar-nav">
          <li class="active">
            <router-link :to="{ name : 'Customers' }"> Customers</router-link>
          </li>
          <li class="active">
            <router-link :to="{ name : 'About' }"> About</router-link>
          </li>
          
        </ul>
        <ul class="nav navbar-nav pull-right">
          <li class="">
            <router-link :to="{ name : 'Add' }"> Customers Add</router-link>
          </li>
          
        </ul>
      </div>
    </nav>
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
