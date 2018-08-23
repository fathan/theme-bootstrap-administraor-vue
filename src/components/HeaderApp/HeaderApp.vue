<template>
  <div>
    <div class="header--top">
      <div class="pull--left">
        <div class="header--top__tagline">
          PT. Absolute Connection
        </div>
      </div>
      <div class="pull--right">
        <div
          class="header--top__profile-menu"
          v-on:click="dropdownMenuHeaderTop = !dropdownMenuHeaderTop"
        >
          <div class="information">
            <div class="email" title="karir.fathan@gmail.com">karir.fathan@gmail.com</div>
            <div class="username" title="Fathan Rohman">Fathan Rohman</div>
          </div>
          <div class="avatar">
            <div class="image">
              <!-- <img :src="require(`@/assets/avatar-small.png`)" alt=""> -->
              <img src="https://media.licdn.com/dms/image/C5103AQEam5PtwUySfw/profile-displayphoto-shrink_200_200/0?e=1538611200&v=beta&t=JmwQpvcPj-LD8XvcS5_1nk8bOmX5i2zOjdeNRvq66qs" alt="">
            </div>
          </div>
        </div>
        <div class="header--top__icon-menu">
          <div class="list-menu">
            <i class="icon-bell"></i>
          </div>
          <div class="list-menu">
            <i class="icon-settings"></i>
          </div>
          <div class="list-menu">
            <i class="icon-bubble"></i>
          </div>
          <div class="list-menu">
            <i class="icon-graph"></i>
          </div>
        </div>
        <div class="header--top__searching-bar">
          <div class="ico-search">
            <i class="icon-magnifier"></i>
          </div>
          <b-form-input size="sm" placeholder="Search data..."></b-form-input>
          <div class="ico-reset">
            <i class="icon-close"></i>
          </div>
        </div>
      </div>
    </div>
    <div
      class="dropdown-profile"
      v-if="dropdownMenuHeaderTop"
    >
      <div class="dropdown-profile__list-menu">
        <div @click="signOut" class="list">
          <div class="title">
            <span>Sign Out</span>
          </div>
          <div class="icon">
            <i class="icon-logout"></i>
          </div>
        </div>
        <div class="list">
          <div class="title">
            <span>Change Password</span>
          </div>
          <div class="icon">
            <i class="icon-key"></i>
          </div>
        </div>
        <div class="list">
          <div class="title">
            <span>My Profile</span>
          </div>
          <div class="icon">
            <i class="icon-user"></i>
          </div>
        </div>
      </div>
    </div>
    <simplert :useRadius="true"
              :useIcon="true"
              ref="simplert">
    </simplert>
  </div>
</template>

<script>
import Simplert from 'vue2-simplert'
export default {
  components: {Simplert},
  data () {
    return {
      dropdownMenuHeaderTop: false
    }
  },
  methods: {
    signOut () {
      let confirmFn = function () {
        this.$router.replace({
          path: '/sign-in'
        })
      }
      let obj = {
        title: 'Close System',
        message: 'if you close system, all proccess is a stoped',
        type: 'info',
        useConfirmBtn: true,
        onConfirm: confirmFn
      }
      this.$refs.simplert.openSimplert(obj)
    }
  }
}
</script>
