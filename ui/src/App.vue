<template>
  <div id="app">
    <app-header></app-header>
    <div class="app-body">
      <router-view/>
    </div>
    <app-footer>footer</app-footer>
  </div>
</template>

<script>
import AppHeader from '@/components/Header'
import AppFooter from '@/components/Footer'
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
#app {

}
.app-body {
  min-height: 600px;
}
</style>
