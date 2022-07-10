<template>
  <div>
    <div class="box">
      <van-search v-model="value" placeholder="请输入搜索关键词">
        <template #left>
          <span @click="$router.push('/city')">
            北京
            <van-icon name="arrow-down" />
          </span>
        </template>
      </van-search>
      <van-icon name="location-o" color="#fff" />
    </div>

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="@/assets/1.png" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/2.png" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/3.png" alt="" />
      </van-swipe-item>
    </van-swipe>

    <ul class="home-item">
      <li>
        <img src="@/assets/4.png" alt="" />
        <h2>整租</h2>
      </li>
      <li>
        <img src="@/assets/5.png" alt="" />
        <h2>合租</h2>
      </li>
      <li>
        <img src="@/assets/6.png" alt="" />
        <h2>地图找房</h2>
      </li>
      <li>
        <img src="@/assets/7.png" alt="" />
        <h2>去出租</h2>
      </li>
    </ul>

    <van-cell-group>
      <van-cell title="租房小组" value="更多" />
    </van-cell-group>

    <van-grid direction="horizontal" :column-num="2">
      <van-grid-item v-for="item in list" :key="item.id">
        <van-image
          :src="'http://liufusong.top:8080' + item.imgSrc"
          class="picture"
        />
        <div>
          <p>{{ item.desc }}</p>
          <p>{{ item.title }}</p>
        </div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { getHome, getgroups } from '@/api/home'
export default {
  created () {
    this.getHome()
    this.getgroups()
  },
  data () {
    return {
      value: '',
      images: [],
      list: []
    }
  },
  methods: {
    onSearch (val) {
      this.$Toast(val)
    },
    async getHome () {
      try {
        const res = await getHome()
        console.log(res)
        this.images = res.data.body
      } catch (err) {
        console.log(err)
      }
    },

    // 租房小组
    async getgroups () {
      try {
        const { data } = await getgroups(this.$store.state.id)
        console.log(data)
        this.list = data.body
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.box {
  position: absolute;
  top: 50px;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  .van-search {
    width: 620px;
    height: 70px;
    margin: 0 20px;
    span {
      width: 110px;
      font-size: 28px;
      margin-left: -10px;
      border-right: 1px solid #e5e5e5;
      i {
        font-size: 24px;
      }
    }
    .van-cell--borderless {
      font-size: 26px;
    }
    .van-search__content {
      background-color: #fff;
    }
  }
  .van-icon-location-o {
    line-height: 70px;
  }
}
/deep/.van-search__label {
  padding-left: -20px;
}
/deep/ .my-swipe .van-swipe-item {
  width: 100vw;
  height: 422px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  img {
    width: 100%;
    height: 100%;
  }
}

.home-item {
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  li {
    text-align: center;
    img {
      width: 120px;
      height: 120px;
    }
    h2 {
      font-weight: 400;
      font-size: 28px;
    }
  }
}

.van-cell__title {
  font-weight: 700;
}

/deep/.van-grid-item p {
  font-size: 28px;
}
.van-grid-item {
  width: 350px;
  height: 120px;
  /deep/.van-image__img {
    display: inline-block;
    width: 100px;
    height: 100px;
    margin-right: 30px;
  }
  p {
    margin: 0;
  }
}
</style>
