<template>
  <section id="quiz" class="quiz">
    <div class="shape"></div>
    <div class="container">
      <IndexForm />
    </div>
  </section>
</template>
<style lang="scss" scoped>
.quiz{
  position: relative;
  padding: 60px 0;
  @media(min-width:576px){
    padding: 90px 0;
  }
  @media(min-width:768px){
    padding: 120px 0;
  }
}
.shape{
  background: radial-gradient(79.88% 79.88% at 89.02% 20.12%, #EBF3FA 0%, #77A8EF 100%);
  filter: blur(5vw);
  width: 15vw;
  height: 20vw;
  position: absolute;
  left: 100px;
  bottom: 100px;
  z-index: 1;
}
</style>