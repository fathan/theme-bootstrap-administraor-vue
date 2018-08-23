<template>
  <transition name="slide-fade">
    <div class="big-menu" v-if="menuBig">
      <div
        class="big-menu__close-button"
        @click="closeBigMenu"
      >
        <i class="icon-close"></i>
      </div>
      <div class="big-menu__list-menu">
        <div class="title-top">
          Module 1 - 10
        </div>
        <div
          class="list"
          v-for="i in 10"
          :key="i"
        >
          <div class="list__icon-left">
            <i class="icon-check"></i>
          </div>
          <div class="list__name">
            Module {{i}}
          </div>
          <div class="list__icon-right">
            <i class="icon-list"></i>
          </div>
        </div>
      </div>
      <div class="big-menu__list-menu">
        <div class="title-top">
          Module 11 - 20
        </div>
        <div
          class="list"
          v-for="i in 20"
          :key="i"
        >
          <div class="list__icon-left">
            <i class="icon-check"></i>
          </div>
          <div class="list__name">
            Module {{i}}
          </div>
          <div class="list__icon-right">
            <i class="icon-list"></i>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  computed: {
    menuBig () {
      return this.$store.getters.menuBig
    }
  },
  methods: {
    closeBigMenu () {
      this.$store.dispatch('handleMenuBig', false)
    }
  }
}
</script>

<style>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
