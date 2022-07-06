<template>
  <section class="points">
    <div class="container">
      <div class="points-item" v-for="point in points">
        <img :src="point.svg">
        <h3 v-html="point.title"></h3>
        <p>{{ point.text }}</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return {
      points: [
        {
          svg: require('@/assets/img/free-icon.svg'),
          title: `No Cost<br> or Fees to Apply`,
          text: `If you had W2 employees 2020/2021, You can get $26,000 refund check for every employee.`
        },
        {
          svg: require('@/assets/img/tax-icon.svg'),
          title: `100% Forgivable Tax Credit<br> (First Come, First Served)`,
          text: `It’s 100% free to get funded, with no fees whatsoever. Our fees are paid directly by the IRS refund we get you.`
        },
        {
          svg: require('@/assets/img/business-icon.svg'),
          title: `Most Businesses<br> Now Qualify`,
          text: `80% of businesses now qualify under loosened rules designed to stimulate American businesses.`
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.points{
  padding-bottom: 60px;
  @media(min-width:768px){
    padding-bottom: 120px;
  }
  .container{
    @media(min-width:768px){
      display: flex;
      flex-wrap: wrap;
    }
  }
  &-item{
    text-align: center;
    padding: 0 10px;
    @media(max-width:767px){
      &:not(:first-child){
        margin-top: 40px;
      }
    }
    @media(min-width:768px){
      padding: 0 30px;
      flex: 1 33.333%;
      max-width: 33.333%;
    }
  }
  img{
    margin-bottom: 20px;
    @media(min-width:768px){
      margin-bottom: 37px;
    }
  }
  h3{
    color: #59595A;
    font-weight: 700;
    font-size: 23px;
    line-height: 1.2;
    margin-bottom: 20px;
    @media(min-width:768px){
      margin-bottom: 37px;
    }
  }
  p{
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.2;
    color: #3068BB;
  }
}
</style>