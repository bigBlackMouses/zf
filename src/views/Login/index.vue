<template>
  <div>
    <!-- nav-bar -->
    <van-nav-bar title="账号登录" left-arrow @click-left="$router.back()" />
    <!-- from -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入账号"
        :rules="[{ message: '请输入账号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[{ message: '请输入密码' }]"
      />
      <div style="margin: 16px">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          class="login-btn"
          @click="onbtn"
          >登录</van-button
        >
      </div>
    </van-form>
    <div class="am-flexbox-item">
      <a href="#">还没有账号，去注册~</a>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user'
import { mapState } from 'vuex'
export default {
  created () { },
  data () {
    return {
      username: 'abc',
      password: '123'
    }
  },
  methods: {
    onbtn () {
      if (this.password === '' || this.username === '') {
        this.$toast('用户名或密码不能为空')
      }
    },
    async onSubmit (values) {
      try {
        const res = await login(values)
        console.log(res)
        this.$store.commit('setUser', res.data.body)

        if (res.data.body) {
          this.$toast('登录成功')
          this.$router.push({ name: 'my' })
        } else {
          this.$toast('账号密码错误')
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
/deep/.van-nav-bar__title {
  font-size: 36px;
}
/deep/.van-field__control {
  height: 120px;
  font-size: 36px;
}
/deep/.login-btn {
  width: 700px;
  height: 100px;
  // font-size: 36px;
  background-color: #21b97a;
  color: #fff;
  border-radius: 5px;
}
/deep/.van-button__text {
  font-size: 36px;
}
.am-flexbox-item {
  text-align: center;
  a {
    color: #666;
    font-size: 28px;
  }
}
</style>
