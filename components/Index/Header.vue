<template>
  <header class="header">
    <div class="container">
      <img class="header-logo" @click.prevent="changeTab(0, $event)" src="@/assets/img/logo-header.svg" />
      <ul ref="nav" class="header-nav" v-if="$route.name !== 'thank-you'">
        <li :class="index === 1 ? 'active':''" @click.prevent="changeTab(1, $event)">What is ERC</li>
        <li :class="index === 2 ? 'active':''" @click.prevent="changeTab(2, $event)">About ERC</li>
        <li :class="index === 3 ? 'active':''" @click.prevent="changeTab(3, $event)">Contact Us</li>
        <li @click.prevent="scrollTo">FAQ</li>
        <li :class="index === 5 ? 'active':''" @click.prevent="changeTab(5, $event)">Privacy</li>
      </ul>
      <button class="header-btn" @click.prevent="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
        <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2L13 12.25M13 12.25L24 22.5M13 12.25L24 2M13 12.25L2 22.5" stroke="#3068BB" stroke-width="3"/></svg>
      </button>
    </div>
    <div class="shape"></div>
  </header>
</template>
<script>
export default {
  computed: {
    index(){
      return this.$store.state.index
    }
  },
  methods: {
    changeTab(index, e){
      this.$store.commit('setIndex', index)
    },
    scrollTo(){
      document.getElementById('faq').scrollIntoView({block: "start", behavior: "smooth"});
    },
    toggleMenu(e){
      this.$refs.nav.classList.toggle('active')
      e.target.classList.toggle('active')
    }
  }
}
</script>
<style lang="scss" scoped>
.page-thankyou{
  .header{
    padding: 15px 0 40px;
    @media(min-width:768px){
      padding: 60px 0;
    }
  }
}
.header{
  padding: 15px 0 20px;
  @media(min-width:576px){
    padding: 15px 0 40px;
  }
  @media(min-width:768px){
    padding: 60px 0 120px;
  }
  .container{
    position: relative;
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  &-nav{
    display: flex;
    flex-wrap: wrap;
    @media(max-width:767px){
      margin-left: -5px;
      margin-right: -5px;
      max-height: 0px;
      transition: 1s ease;
      overflow: hidden;
      &.active{
        padding-top: 15px;
        max-height: 1000px;
        @media(min-width:576px){
          padding-top: 30px;
        }
      }
    }
    li{
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      color: #59595A;
      border-radius: 15px;
      border: 1px solid transparent;
      cursor: pointer;
      transition: .5s ease;
      font-size: 18px;
      line-height: 1.2;
      padding: 10px 15px;
      @media(min-width:576px){
        font-size: 23px;
        padding: 23px 42px;
      }
      @media(max-width:767px){
        margin: 5px;
        border-color: #59595A;
        &:hover, &.active{
          background: #59595A;
          color: #fff;
        }
      }
      @media(min-width:768px){
        font-size: 16px;
        line-height: 19px;
        padding: 10px;
      }
      &:hover, &.active{
        border-color: #59595A;
      }
      &:not(:first-child){
        @media(min-width:768px){
          margin-left: 15px;
        }
      }
    }
  }
  &-btn{
    position: absolute;
    padding: 10px 0;
    background: none;
    border: none;
    right: 10px;
    top: 6px;
    display: block;
    border: 1px solid transparent;
    border-radius: 15px;
    transition: .5s ease;
    width: 55px;
    @media(min-width:768px){
      display: none;
    }
    *{
      pointer-events: none;
    }
    span{
      height: 3px;
      background: #3068BB;
      display: block;
      transition: opacity .5s ease;
      &:not(:first-child){
        margin-top: 5px;
      }
    }
    svg{
      opacity: 0;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: opacity .5s ease;
    }
    &.active{
      span{
        opacity: 0;
      }
      svg{
        opacity: 1;
      }
    }
  }
  &-logo{
    height: auto;
    width: 55px;
    cursor: pointer;
    @media(min-width:768px){
      width: 73px;
    }
  }
}
.shape{
  background: radial-gradient(79.88% 79.88% at 89.02% 20.12%, #EBF3FA 0%, #77A8EF 100%);
  filter: blur(5vw);
  width: 15vw;
  height: 15vw;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
}
</style>