<template>
  <van-cell
    title="单元格"
    size="large"
    label="描述信息"
    class="cell"
    @click="
      $router.push({ name: 'detail', params: { houseCode: item.houseCode } })
    "
  >
    <template #icon>
      <van-image
        width="100"
        height="100"
        :src="'http://liufusong.top:8080' + item.houseImg"
      />
    </template>
    <template #title>
      <div class="text_p">
        <p>{{ item.title }}</p>
        <span class="text_p1"
          ><p>{{ item.desc }}</p></span
        >
        <span class="text_p2">
          <p>{{ item.tags[0] }}</p></span
        >
        <p class="text_p3">{{ item.price }}</p>
      </div>
    </template>
  </van-cell>
</template>

<script>
export default {
  props: {
    item: {
      type: [Array, Object],
      required: true
    }
  },
  created () { },
  data () {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.text_p {
  p {
    // padding-top:-20px ;
    margin: 3px;
    margin-left: 10px;
  }
}
.text_p1 {
  color: #afb2b3;
  font-size: 15px;
}
.text_p2 {
  font-size: 12px;
  color: #39becd;
  background: #e1f5f8;
  border-radius: 3px;
}
.text_p3 {
  font-size: 12px;
  font-size: 16px;
  color: #fa5741;
}
</style>
