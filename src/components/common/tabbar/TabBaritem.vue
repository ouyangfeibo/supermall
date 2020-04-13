<template>
  <div class="tab-bar-item" @click="routerclick">
    <slot v-if="!isActive" name="item-img"></slot>
    <slot v-else name="item-img-active"></slot>
    <div v-bind:class="{active:isActive}">
      <slot name="item-font"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbaritem",
  props: {
    path:String
  },
  data() {
    return {
    }
  },
  computed: {
    isActive(){
      return  this.$route.path.indexOf(this.path) !== -1
    }
  },
  methods: {
      routerclick(){
        this.$router.replace(this.path)
      }
    }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 12px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-top: 3px;
}
.active {
  color: rgb(243, 123, 143);
}
</style>