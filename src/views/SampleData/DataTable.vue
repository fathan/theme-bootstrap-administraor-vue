<template>
  <div>
    <div class="header--content">
      <div class="header--content__title">
        Sample Data Table
      </div>
      <div class="header--content__breadcrumbs">
        Dashboard - Sample Data Table
      </div>
    </div>
    <div class="content-app__body">
      <v-client-table :data="tableData" :columns="columns" :options="options"></v-client-table>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import {ClientTable} from 'vue-tables-2'
Vue.use(ClientTable, {}, false, 'bootstrap3')

export default {
  data () {
    return {
      columns: ['id', 'name', 'age'],
      tableData: [
        { id: 1, name: 'John', age: '20' },
        { id: 2, name: 'Jane', age: '24' },
        { id: 3, name: 'Susan', age: '16' },
        { id: 4, name: 'Chris', age: '55' },
        { id: 5, name: 'Dan', age: '40' }
      ],
      options: {
        // see the options API
      }
    }
  }
}
</script>
