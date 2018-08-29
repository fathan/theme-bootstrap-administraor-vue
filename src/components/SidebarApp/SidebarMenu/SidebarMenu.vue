<template>
  <div class="sidebar-app__box-menu">
    <router-link
      :to="'/'"
      v-for="i in 10"
      :key="i"
    >
      <div class="list-menus">
        <div class="icon">
          <i class="icon-star"></i>
        </div>
        <div class="text" v-if="textMenu">
          <span>Sub Menu {{ i }}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    textMenu () {
      return this.$store.getters.textMenu
    }
  }
}
</script>
