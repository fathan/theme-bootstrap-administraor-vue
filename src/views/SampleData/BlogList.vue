<template>
  <div>
    Blog List
    <ul>
      <li v-for="f in data" :key="f.id">
        {{f.title}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      required: true,
      type: Array
    }
  }
}
</script>
