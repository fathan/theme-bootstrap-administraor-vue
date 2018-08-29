<template>
  <div
    class="sidebar-app"
    :style="{ width: widthSidebar}"
  >
    <div
      class="sidebar-app__hide-text-labels"
      @click="offText"
      v-if="textMenu"
    >
      <i class="icon-arrow-left"></i>
    </div>
    <div
      class="sidebar-app__hide-text-labels"
      @click="onText"
      v-else
    >
      <i class="icon-arrow-right"></i>
    </div>
    <sidebar-fixed></sidebar-fixed>
    <sidebar-title></sidebar-title>
    <sidebar-menu></sidebar-menu>
  </div>
</template>

<script>
import SidebarFixed from '@/components/SidebarApp/SidebarFixed/SidebarFixed'
import SidebarTitle from '@/components/SidebarApp/SidebarTitle/SidebarTitle'
import SidebarMenu from '@/components/SidebarApp/SidebarMenu/SidebarMenu'

export default {
  components: {
    SidebarMenu,
    SidebarTitle,
    SidebarFixed
  },
  computed: {
    widthSidebar () {
      return this.$store.getters.widthSidebar
    },
    textMenu () {
      return this.$store.getters.textMenu
    }
  },
  methods: {
    onText () {
      this.$store.dispatch('handlePaddingLeftContent', '230px')
      this.$store.dispatch('handleWidthSidebar', '230px')
      this.$store.dispatch('handleTextMenu', true)
    },
    offText () {
      this.$store.dispatch('handlePaddingLeftContent', '55px')
      this.$store.dispatch('handleWidthSidebar', '55px')
      this.$store.dispatch('handleTextMenu', false)
    }
  }
}
</script>
