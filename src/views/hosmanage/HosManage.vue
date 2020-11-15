<template>
  <div class="hos-manage">
    <left-aside></left-aside>
    <right-main></right-main>
  </div>
</template>

<script>

import LeftAside from '@/views/hosmanage/Aside'
import RightMain from '@/views/hosmanage/RightMain'
export default {
  components:{
    LeftAside,
    RightMain
  }
}
</script>

<style lang="scss" scoped>
  .hos-manage {
    display: flex;
  }
</style>

