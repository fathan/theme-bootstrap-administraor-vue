<template>
  <div>
    <div class="header--content">
      <div class="header--content__title">
        Blog
      </div>
      <div class="header--content__breadcrumbs">
        Dashboard - Blog
      </div>
    </div>
    <div class="content-app__body">
      Blog
      <blog-list :data="blogs"></blog-list>
    </div>
  </div>
</template>

<script>
import BlogList from './BlogList'

export default {
  data () {
    return {
      blogs: [
        {
          id: 1,
          title: 'Judul blog ke 1',
          description: 'Lorem ipsum dolor sit amet'
        },
        {
          id: 2,
          title: 'Judul blog ke 2',
          description: 'Lorem ipsum dolor sit amet'
        },
        {
          id: 3,
          title: 'Judul blog ke 3',
          description: 'Lorem ipsum dolor sit amet'
        }
      ]
    }
  },
  components: {
    BlogList
  }
}
</script>
