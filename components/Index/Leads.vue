<template>
  <section class="leads">
    <div class="container">
      <div class="leads-left">
        <IndexContent />
      </div>
      <div class="leads-right">
        <IndexForm />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.leads{
  padding-bottom: 60px;
  @media(min-width:768px){
    padding-bottom: 120px;
  }
  .container{
    @media(min-width:768px){
      display: flex;
    }
  }
  &-left, &-right{
    @media(min-width:768px){
      flex: 1 50%;
      width: 50%;
    }
  }
  &-left{
    margin-bottom: 30px;
    @media(min-width:768px){
      margin-bottom: 0;
      order: 2;
    }
  }
  &-right{
    @media(min-width:768px){
      padding: 0 15px;
    }
    @media(min-width:992px){
      padding: 0 30px;
    }
    @media(min-width:1200px){
      padding: 0 60px;
    }
  }
}
</style>