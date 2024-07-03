<script setup>

</script>


<template>
  <div class="loading">
    <div class="bg">
      <img src="../../assets/img/home/full-screen-loading.gif" alt="">
    </div>
    
  </div>
</template>


<style lang="less" scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 888;
  background-color: rgba(214, 216, 216, .2);

  .bg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 104px;
    height: 104px;
    background-color: rgba(224, 231, 231, .2);
    border-radius: 50%;

    img {
      width: 70px;
      height: 70px;
    }
  }
}

</style>
