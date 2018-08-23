<template>
  <div class="absolute-connection-wrapper">
    <div class="signin-page">
      <b-form @submit="onSubmit" class="form-signin">
        <div class="form-label-group">
          <label for="inputEmail">Email address</label>
          <input type="email" id="inputEmail" class="form-control" placeholder="Email address" autofocus>
        </div>

        <div class="form-label-group">
          <label for="inputPassword">Password</label>
          <input type="password" id="inputPassword" class="form-control" placeholder="Password">
        </div>

        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="btn btn-success btn-block" type="submit">
          <i class="icon-login"></i>
          &nbsp;&nbsp;Sign in
        </button>
        <p class="mt-5 mb-3 text-center">
          &copy; Copyright 2018 - PT. Absolute Connection
        </p>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onSubmit () {
      this.$router.replace({
        path: '/'
      })
    }
  }
}
</script>
