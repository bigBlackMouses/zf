<template>
  <div>
    <!-- 已登录 -->
    <div class="header header-login" v-if="user && user.token">
      <van-image
        width="375"
        height="375"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      <div class="myInfo">
        <div class="myAvatar">
          <img src="@/assets/avatar (1).png" alt="" />
        </div>
        <div class="myName">好客_68564</div>
        <van-button type="primary" class="mybtn" @click="$router.push('/login')"
          >退出</van-button
        >
        <div class="myEdit">
          <span>编辑个人资料</span>
          <van-icon name="play" />
        </div>
      </div>
    </div>
    <!-- 未登录 -->
    <div class="header header-notlogin" v-else>
      <van-image
        width="375"
        height="300"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      <div class="myInfo">
        <div class="myAvatar">
          <img src="@/assets/avatar (1).png" alt="" />
        </div>
        <div class="myName">游客</div>
        <van-button type="primary" class="mybtn" @click="$router.push('/login')"
          >去登录</van-button
        >
      </div>
    </div>
    <van-grid :column-num="3">
      <van-grid-item icon="star-o" text="我的收藏" />
      <van-grid-item icon="wap-home-o" text="我的出租" />
      <van-grid-item icon="clock-o" text="看房记录" />
      <van-grid-item icon="debit-pay" text="成为房主" />
      <van-grid-item icon="contact" text="个人资料" />
      <van-grid-item icon="phone-o" text="联系我们" />
    </van-grid>
    <div class="pic">
      <img src="@/assets/join.png" alt="" />
    </div>
  </div>
</template>

<script>
import { getMy } from '@/api/user'
import { mapState } from 'vuex'
export default {
  created () {
    this.getMy()
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    async getMy () {
      try {
        const res = await getMy()
        console.log(res)
        this.list = res.data.body
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
.header {
  position: relative;
  .myAvatar {
    display: inline-block;
    position: relative;
    transform: translateY(-50%);
    width: 120px;
    height: 120px;
    border: 10px solid #f5f5f5;
    border-radius: 50%;
    box-shadow: 0 2px 2px #bdbdbd;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.header-login {
  /deep/.myInfo {
    position: absolute;
    background: #fff;
    width: 85%;
    height: 55%;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 10px 3px #ddd;
    margin: 50px auto 0;
    padding: 0 20px;
    text-align: center;
    font-size: 13px;
    .myName {
      font-size: 26px;
      margin-bottom: 10px;
      margin-top: -30px;
    }
    .mybtn {
      width: 104px;
      height: 40px;
      border-radius: 30px;
      color: #fff;
      padding: 2px 15px;
      background: #21b97a;
      font-size: 12px;
    }
    .myEdit {
      color: #999;
      font-size: 12px;
      margin-top: 50px;
    }
  }
}
.header-notlogin {
  text-align: center;
  .myInfo {
    position: absolute;
    background: #fff;
    width: 85%;
    height: 55%;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 10px 3px #ddd;
    margin: 50px auto 0;
    padding: 0 20px;
    text-align: center;
    .myName {
      margin-top: -30px;
      margin-bottom: 25px;
      font-size: 26px;
    }
    .mybtn {
      width: 140px;
      height: 60px;
      font-size: 25px;
      background-color: #21b97a;
      border-radius: 10px;
    }
  }
}
.pic {
  width: 690px;
  height: 170px;
  padding: 0 20px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
