<template>
  <div
    class="sidebar-app"
    :style="{ width: '230px'}"
  >
    <!-- <div
      class="sidebar-app__hide-text-labels"
      @click="removeText"
    >
      <i class="icon-arrow-left"></i>
    </div> -->
    <sidebar-menu></sidebar-menu>
  </div>
</template>

<script>
import SidebarMenu from '@/components/SidebarApp/SidebarMenu/SidebarMenu'

export default {
  components: {
    SidebarMenu
  },
  methods: {
    removeText () {
      alert('test')
    }
  }
}
</script>
