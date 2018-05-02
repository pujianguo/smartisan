<template>
  <div class="item">
    <div>
      <div class="item-img"><img :alt="item.name" :src="item.sku_info[itemIndex].ali_image + '?x-oss-process=image/resize,w_206/quality,Q_80/format,webp'" style="opacity: 1;">
      </div>
      <h6>{{item.name}}</h6>
      <h3 >10000mAh 双向快充、轻盈便携、高标准安全保护</h3>
      <div class="params-colors">
        <ul class="colors-list">
          <li v-for="(sku, skuI) in item.sku_info" :key="skuI"><a href="javascript:;" :title="sku.spec_json.show_name" :class="{'active': skuI === itemIndex}" @click="tableIndex(skuI)"><img :src="'https://resource.smartisan.com/resource/' + sku.spec_json.image + '?x-oss-process=image/resize,w_20/format,webp'"></a></li>
        </ul>
      </div>
      <div class="item-btns clearfix">
        <span class="item-gray-btn"><a href="javascript:;" target="_blank">查看详情</a> </span>
        <span class="item-blue-btn"  @click="addCarPanelData(item.sku_info[itemIndex])">加入购物车 </span>
      </div>
      <div class="item-price clearfix">
        <i>¥</i><span> {{item.price}} </span>
      </div>
      <div class="discount-icon">false</div>
      <div class="item-cover">
        <a href="javascript:;" target="_blank"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  props: {
    item: {
      type: Object
    }
  },
  data () {
    return {
      itemIndex: 0
    }
  },
  methods: {
    tableIndex (index) {
      this.itemIndex = index
    },
    addCarPanelData (data) {
      this.$store.commit('addCarPanelData', data)
    }
  }
}
</script>

<style>
</style>
