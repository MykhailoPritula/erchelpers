<template>
  <footer>
    <div class="container">
      <div class="footer">
        <div class="logo">
          <img src="@/assets/img/logo-footer.svg">
        </div>
        <div @click="scrollTo" class="contact">
          Contact Us
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  methods: {
    scrollTo(){
      this.$store.commit('setIndex', 3)
      document.querySelector('.header').scrollIntoView({block: "start", behavior: "smooth"});
    }
  }
}
</script>
<style lang="scss" scoped>
footer{
  background: #59595A;
}
.page-thankyou{
  .contact{
    display: none;
  }
}
.footer{
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo{
    width: 73px;
    height: 67px;
    @media(max-width:575px){
      margin: 0 auto;
    }
  }
  .contact{
    padding: 10px;
    border: 1px solid #717171;
    border-radius: 15px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.2;
    color: #fff;
    cursor: pointer;
    transition: .5s ease-in-out;
    &:hover{
      background: #fff;
      color: #000;
    }
    @media(max-width:575px){
      display: none;
    }
  }
}
</style>