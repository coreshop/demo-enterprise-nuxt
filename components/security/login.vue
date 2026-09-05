<template>
  <div class="row">
    <div class="col-sm-6">
      <div class="card card-smart">
        <div class="card-header">
          <h3 class="card-title">Login</h3>
        </div>
        <div class="card-body">
          <p>
            Login with existing account
          </p>

          <form @submit.prevent="login">
            <div class="form-group"><label for="_username" class="required">Email</label><input type="text" id="_username" name="_username" autocomplete="username" v-model="username" required class="form-control"></div>
            <div class="form-group"><label for="_password" class="required">Password</label><input type="password" id="_password" name="_password" autocomplete="current-password" v-model="password" required class="form-control"></div>
            <button type="submit" class="btn-success btn submit button">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">

export default defineComponent({
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async login() {
      const authStore = useAuthStore();
      await authStore.login(this.username, this.password);
    }
  }
})
</script>
