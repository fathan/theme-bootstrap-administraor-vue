<template>
  <div class="sidebar-app__box-menu">
    <router-link :to="'/'">
      <div class="list-menus">
        <div class="icon">
          <i class="icon-home"></i>
        </div>
        <div class="text">
          <span>Dashboard</span>
        </div>
      </div>
    </router-link>
    <div
      class="list-menus"
      @click="showMenuBig"
    >
      <div class="icon">
        <i class="icon-badge"></i>
      </div>
      <div class="text">
        <span>All Modules</span>
      </div>
    </div>
    <router-link
      :to="'/sample-data-table'"
    >
      <div class="list-menus">
        <div class="icon">
          <i class="icon-list"></i>
        </div>
        <div class="text">
          <span>Data Table</span>
        </div>
      </div>
    </router-link>
    <router-link
      :to="'/sample-data-input'"
    >
      <div class="list-menus">
        <div class="icon">
          <i class="icon-pencil"></i>
        </div>
        <div class="text">
          <span>Data Input</span>
        </div>
      </div>
    </router-link>
    <!-- <router-link
      :to="'/sample-print'"
    >
      <div class="list-menus">
        <div class="icon">
          <i class="icon-printer"></i>
        </div>
        <div class="text">
          <span>Print</span>
        </div>
      </div>
    </router-link> -->
  </div>
</template>

<script>
export default {
  methods: {
    showMenuBig () {
      this.$store.dispatch('handleMenuBig', true)
    }
  }
}
</script>
