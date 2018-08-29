<template>
  <div class="sidebar-app__divider-favorite">
    <div class="icon">
      <i class="icon-star"></i>
    </div>
    <div class="title" v-if="textMenu">
      favorites
    </div>
    <hr>
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
