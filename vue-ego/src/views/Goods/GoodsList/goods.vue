<template>
<div>
    商品列表
</div>
</template>

<script>
export default {
  name: 'Goods',
  methods:{
    //handleEdit handleDelete
    handleEdit(row){
      // this.$router.push({
      //   path:'/goods/goodslist/goodsedit',
      //   query:{
      //     id:row.id
      //   }
      // })
    },
    handleDelete(row){
      // this.$confirm('确认删除该商品吗？','提示',{
      //   confirmButtonText:'确定',
      //   cancelButtonText:'取消',
      //   type:'warning'
      // }).then(()=>{
      //   this.$message({
      //     type:'success',
      //     message:'删除成功!'
      //   })
      // }).catch(()=>{
      //   this.$message({
      //     type:'info',
      //     message:'已取消删除'
      //   })
      // })
    }
  },
  created () {
    this.$api.getGoodsList({
      page: 1,
    }).then(res => {
      this.goodsList = res.data
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style scoped>

</style>
