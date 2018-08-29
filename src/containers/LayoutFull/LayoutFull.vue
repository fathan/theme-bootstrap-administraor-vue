<template>
  <div class="absolute-connection-wrapper">
    <header-app></header-app>
    <sidebar-app></sidebar-app>
    <div class="content-app" :style="{ paddingLeft: paddingLeft }">
      <big-menu></big-menu>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderApp from '@/components/HeaderApp/HeaderApp'
import SidebarApp from '@/components/SidebarApp/SidebarApp'
import BigMenu from '@/components/BigMenu/BigMenu'

export default {
  components: {
    HeaderApp,
    SidebarApp,
    BigMenu
  },
  computed: {
    paddingLeft () {
      return this.$store.getters.paddingLeftContent
    }
  }
}
</script>
