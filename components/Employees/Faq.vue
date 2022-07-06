<template>
  <div class="faq">
    <div class="subtitle">Frequently Asked Questions:</div>
    <h3>Top Questions</h3>
    <div class="item" v-for="(item, index) in questions">
      <div class="question">{{ item.q }}</div>
      <div class="answer" v-if="item.a" v-html="item.a"></div>
      <ul v-if="item.list">
        <li v-for="itemList in item.list" v-html="itemList"></li>
      </ul>
    </div>
    <h3>Qualifications</h3>
    <div class="item" v-for="(item, index) in qualifications">
      <div class="question">{{ item.q }}</div>
      <div class="answer" v-if="item.a" v-html="item.a"></div>
      <ul class="bottom" v-if="item.list">
        <li v-for="itemList in item.list" v-html="itemList"></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ['questions', 'qualifications'],
  methods: {
    scrollTo(){
      document.getElementById('quiz').scrollIntoView({block: "start", behavior: "smooth"});
    }
  }
}
</script>
<style lang="scss" scoped>
.faq{
  text-align: left;
  padding: 30px 0;
  @media(min-width:768px){
    padding: 60px 0;
  }
  .subtitle{
    font-weight: 700;
    font-size: 40px;
    color: #3068BB;
    text-align: left;
    line-height: 1.2;
  }
  h3{
    font-family: 'Inter', sans-serif;
    margin: 20px 0;
    font-weight: 700;
    font-size: 23px;
    line-height: 1.2;
    color: #181818;
    padding-left: 10px;
  }
  .item{
    .question{
      background: #E7F1F8;
      border-radius: 15px;
      color: #3068BB;
      font-family: 'Inter', sans-serif;
      font-weight: 700;
      font-size: 18px;
      line-height: 1.2;
      padding: 20px;
    }
    .answer{
      border-radius: 15px;
      padding: 20px;
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 18px;
      line-height: 1.2;
      color: #181818;
    }
    ul{
      margin-left: 20px;
      padding: 20px 5px;
      font-size: 18px;
      line-height: 1.2;
      color: #181818;
      font-weight: 400;
      li{
        font-family: 'Inter', sans-serif;
      }
    }
    .bottom{
      list-style: disc;
      padding: 0px 20px;
    }
  }
}
</style>