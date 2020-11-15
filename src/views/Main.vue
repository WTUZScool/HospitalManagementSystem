<template>
  <div class="main">
    <top-nav
      @navClick = "toPath"
    ></top-nav>
    <router-view></router-view>
    
  </div>
</template>

<script>
import TopNav from '@/components/common/TopNav'

export default {
  components:{
    TopNav
  },
  methods: {
    toPath(path) {
      this.$router.push(path)
    }
  },
}
</script>

<style>

</style>