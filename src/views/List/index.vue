<template>
  <div>
    <!-- search -->
    <div class="container">
      <div class="box">
        <van-icon name="arrow-left" />
        <van-search v-model="values" placeholder="请输入搜索关键词">
          <template #left>
            <span @click="$router.push('/city')">
              北京
              <van-icon name="arrow-down" />
            </span>
          </template>
        </van-search>
        <van-icon name="location-o" color="#fff" />
      </div>
    </div>

    <van-sticky>
      <van-dropdown-menu>
        <van-dropdown-item title="区域">
          <van-picker title="标题" :columns="columns" value-key="label" />
          <van-row>
            <van-col span="8">
              <van-button block>取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button type="primary" block>确定</van-button>
            </van-col>
          </van-row>
        </van-dropdown-item>
        <van-dropdown-item title="方式">
          <van-picker title="标题" :columns="columns1" value-key="label" />
          <van-row>
            <van-col span="8">
              <van-button block>取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button type="primary" block>确定</van-button>
            </van-col>
          </van-row>
        </van-dropdown-item>
        <van-dropdown-item title="租金">
          <van-picker title="标题" :columns="columns2" value-key="label" />
          <van-row>
            <van-col span="8">
              <van-button block>取消</van-button>
            </van-col>
            <van-col span="16">
              <van-button type="primary" block>确定</van-button>
            </van-col>
          </van-row>
        </van-dropdown-item>
        <van-dropdown-item title="筛选" @open="flag = true"></van-dropdown-item>
      </van-dropdown-menu>
    </van-sticky>
    <van-popup position="right" style="height: 100%; width: 70%" v-model="flag">
    </van-popup>

    <HomeList
      v-for="(item, index) in list"
      :key="index"
      :item="item"
    ></HomeList>
  </div>
</template>

<script>
import HomeList from '@/components/HomeList.vue'
import { getHouses, getCondition } from '@/api/house'
export default {
  created () {
    this.getHouses()
    this.getCondition()
  },
  data () {
    return {
      values: '',
      value1: 0,
      value2: 'a',
      columns: [

      ],
      columns1: [

      ],
      columns2: [
        {
          text: '浙江'

        },
        {
          text: '福建'

        }
      ],
      flag: false,
      list: []
    }
  },
  methods: {
    async getHouses () {
      try {
        const res = await getHouses(this.$store.state.id)
        // console.log(res)
        this.list = res.data.body.list
      } catch (err) {
        console.log(err)
      }
    },
    async getCondition () {
      try {
        const res1 = await getCondition(this.$store.state.id)
        console.log(res1)
        res1.data.body.area.children[0].children = [{ label: '' }]
        res1.data.body.subway.children[0].children = [{ label: '' }]
        this.columns = [res1.data.body.area, res1.data.body.subway]
        this.columns1 = res1.data.body.rentType
        this.columns2 = res1.data.body.price
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: { HomeList }
}
</script>

<style scoped lang='less'>
.box {
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #21b97a;
  .van-icon {
    color: #fff;
    font-size: 40px;
    line-height: 70px;
  }

  .van-search {
    width: 590px;
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

.van-dropdown-menu {
  padding-top: 100px;
}
</style>
