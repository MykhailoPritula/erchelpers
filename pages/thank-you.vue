<template>
  <section class="page page-thankyou">
    <div class="shape shape-left"></div>
    <div class="shape shape-right"></div>
    <IndexHeader />
    <EmployeesMore v-if="this.$store.state.result === 1" />
    <EmployeesLess v-else />
    <IndexFooter />
  </section>
</template>
<script>
export default {
  data(){
    return{
      user: null,
      amount: 0
    }
  },
  mounted(){
    if (!this.$store.getters["result"]) this.$router.push("/");
    if(sessionStorage.user){
      this.user = JSON.parse(sessionStorage.user)
      const quiz = JSON.parse(this.user.quiz)
      this.amount = (Number(quiz[1].answer) * 26000).toFixed(2)
    } else {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss" scoped>
.page-thankyou{
  .container{
    text-align: center;
    margin-bottom: 60px;
    h2{
      font-weight: 700;
      font-size: 35px;
      color: #3068BB;
      line-height: 1.2;
      margin-bottom: 40px;
      @media(min-width:768px){
        font-size: 40px;
      }
    }
    .status{
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin-bottom: 90px;
      @media(max-width:767px){
        margin-bottom: 40px;
        flex-direction: column;
      }
      div{
        &:not(:last-child){
          margin-bottom: 40px;
          @media(min-width:768px){
            margin-bottom: 0;
          }
        }
      }
      .title{
        font-weight: 700;
        font-size: 23px;
        color: #59595A;
        line-height: 1.2;
        margin-bottom: 20px;
        @media(min-width:768px){
          margin-bottom: 0;
        }
      }
      span{
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 35px;
        color: #3068BB;
        @media(min-width:768px){
          font-size: 40px;
        }
      }
    }
    p{
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      line-height: 1.2;
      color: #181818;
    }
    .text{
      p{
        font-size: 18px;
        margin-bottom: 30px;
      }
    }
    button{
      max-width: 585px;
      width: 100%;
      padding: 20px;
      border-radius: 15px;
      background: #FCD53F;
      border: none;
      color: #fff;
      font-weight: 700;
      font-size: 23px;
      line-height: 1.2;
      transition: .5s ease-in-out;
      margin-bottom: 40px;
      &:hover{
        outline: 2px solid #59595A;
      }
    }
    .text-bottom{
      text-align: left;
      p{
        font-size: 16px;
        margin-bottom: 20px;
      }
      ul{
        list-style-type: disc;
        margin-left: 20px;
        color: #3068BB;
        margin-bottom: 20px;
      }
    }
    .second, .third{
      &-title{
        font-weight: 700;
        font-size: 35px;
        color: #3068BB;
        line-height: 1.2;
        margin-bottom: 40px;
        @media(min-width:768px){
          font-size: 40px;
          margin-bottom: 60px;
        }
      }
    }
  }
  .shape{
    background: radial-gradient(79.88% 79.88% at 89.02% 20.12%, #EBF3FA 0%, #77A8EF 100%);
    filter: blur(5vw);
    width: 15vw;
    height: 15vw;
    position: absolute;
    z-index: 1;
    &-left{
      right: 0;
      top: 0;
    }
    &-right{
      left: 0;
      bottom: 0;
    }
  }
}
</style>