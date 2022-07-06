<template>
  <div class="stars">
    <ul class="stars-rating">
      <li class="stars-f"></li>
      <li class="stars-f"></li>
      <li class="stars-f"></li>
      <li class="stars-f"></li>
      <li class="stars-f"></li>
    </ul>
    <span>(4.95/5) User Satisfaction</span>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
.stars {
  display: flex;
  margin-right: 10px;
  margin-bottom: 10px;
  @media(min-width: 576px){
    margin-bottom: 20px;
  }
  @media(min-width: 768px){
    margin-bottom: 40px;
  }
  &-rating {
    display: flex;
    margin-right: 10px;
    &:not(:last-child){
      margin-bottom: 10px;
    }
    li {
      display: block;
      font-size: 20px;
      font-family: Arial !important;
      position: relative;
      color: #FCD53F;
    }
  }
  &-f:before {
    content: "★";
  }
  span{
    font-family: 'Inter', sans-serif;
    font-style: italic;
    font-weight: 500;
    font-size: 14px;
    color: #59595A;
    line-height: 20px;
    @media(min-width:768px){
      font-size: 16px;
    }
  }
}
</style>
