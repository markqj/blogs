<template>
  <div>
    <p>{{username}}</p>
    <router-view/>
  </div>
</template>

<script>
export default {
  // 组件名字
  name: 'user',
  // Vue 实例的数据对象
  data () {
    return {
      username: ''
    }
  },
  // 计算属性
  computed: {
    account () {
      return this.$store.state.global.account
    }
  },
  // 方法
  methods: {

  },
  // 声明组件
  components: {

  },
  // 组件挂载到实例上去之后调用的钩子
  mounted () {
    this.username = this.$route.params.username
  }

}
</script>

<style lang="less">

</style>
