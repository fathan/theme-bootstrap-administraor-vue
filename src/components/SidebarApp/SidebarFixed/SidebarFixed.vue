<template>
  <div class="sidebar-app__box-menu-fixed">
    <router-link :to="'/'">
      <div class="list-menus">
        <div class="icon">
          <i class="icon-home"></i>
        </div>
        <div class="text" v-if="textMenu">
          <span>Dashboard</span>
        </div>
      </div>
    </router-link>
    <div
      class="list-menus"
      @click="showMenuBig"
    >
      <div class="icon">
        <i class="icon-list"></i>
      </div>
      <div class="text" v-if="textMenu">
        <span>All Menu</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showMenuBig () {
      this.$store.dispatch('handleMenuBig', true)
    }
  },
  computed: {
    textMenu () {
      return this.$store.getters.textMenu
    }
  }
}
</script>
