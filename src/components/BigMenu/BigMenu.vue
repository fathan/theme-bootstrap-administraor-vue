<template>
  <div class="big-menu" v-if="menuBig">
    <div class="big-menu__list-menu">
      <div class="title-top">
        <span>All Menu</span>
        <i class="icon-list"></i>
      </div>
      <div class="box-lists">
        <div
          class="list"
          v-for="i in 20"
          :key="i"
        >
          <div class="list__name">
            Menu {{i}}
          </div>
          <div class="list__icon-right">
            <i class="icon-list"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="big-menu__sub-list-menu">
      <div class="filtering">
        <div class="pull--left">
          <b-form-input size="sm" placeholder="Filter"></b-form-input>
        </div>
        <div class="pull--right">
          <span class="filtering__ex-col">Collapse All</span> | <span class="filtering__ex-col">Expand All</span>
        </div>
      </div>
      <div class="box-lists">
        <div
          v-for="i in 5"
          :key="i"
        >
          <div class="title-top">
            <span>Event Submenu {{ i }} (10)</span>
            <hr>
            <div class="icon-right">
              <i class="icon-arrow-down"></i>
            </div>
          </div>
          <div
            class="list"
            v-for="f in 10"
            :key="f"
          >
            <div class="list__name">
              Sub Menu {{f}}
            </div>
            <div v-if="i === 1">
              <div class="list__icon-right is-favorite">
                <i class="icon-star"></i>
              </div>
            </div>
            <div v-else>
              <div class="list__icon-right">
                <i class="icon-star"></i>
              </div>
            </div>
          </div>
          <div class="mg-bottom--sub-list-menu"></div>
        </div>
      </div>
    </div>
  </div>
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
