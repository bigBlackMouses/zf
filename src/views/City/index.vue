<template>
  <div>
    <van-nav-bar title="城市列表" left-arrow @click-left="$router.back()" />

    <van-index-bar>
      <van-index-anchor index="#">当前城市</van-index-anchor>
      <van-cell title="北京" />
      <van-index-anchor index="热">热门城市</van-index-anchor>
      <van-cell
        :title="item.label"
        v-for="(item, index) in hotCity"
        :key="index"
      />
    </van-index-bar>
  </div>
</template>

<script>
import { getCityList, getHotCityList } from '@/api/area'
export default {
  created () {
    this.getCityList()
    this.getHotCityList()
  },
  data () {
    return {
      hotCity: [],
      cityList: []
    }
  },
  methods: {
    async getHotCityList () {
      try {
        const res = await getHotCityList()
        console.log(res)
        this.hotCity = res.data.body
      } catch (err) {
        console.log(err)
      }
    },
    async getCityList () {
      try {
        const res = await getCityList(1)
        // console.log(res)
        this.cityList = res.data.body
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
</style>
