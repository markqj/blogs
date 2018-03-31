<template>
  <div>
    <a :href="url_resume">我的简历</a>
    <a :href="url_profile">我的资料</a>
  </div>
</template>

<script>
export default {
  // 组件名字
  name: 'user-index',
  // Vue 实例的数据对象
  data () {
    return {
      username: ''
    }
  },
  // 计算属性
  computed: {
    url_resume () {
      return '/u/' + this.username + '/resume'
    },
    url_profile () {
      return '/u/' + this.username + '/profile'
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
