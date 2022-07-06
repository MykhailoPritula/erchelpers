<template>
  <section class="works">
    <div class="container">
      <h2>Here’s How It Works:</h2>
      <div class="works-items">
        <div class="works-item" v-for="(item, index) in items">
          <div class="num">0{{ ++index }}</div>
          <h3>{{ item.title }}</h3>
          <h4>{{ item.subtitle }}</h4>
          <p>{{ item.text }}</p>
          <ul v-if="item.list">
            <li v-for="itemList in item.list">{{ itemList }}</li>
          </ul>
          <p v-if="item.subtext">{{ item.subtext }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return {
      items: [
        {
          title: `Take Qualification Quiz`,
          subtitle: `(60sec)`,
          text: `In just 60 seconds, you can find out:`,
          list: [`If You Will Qualify`, `How Much Can You Receive`, `If You’re Eligible to Have it 100% Forgiven`],
          subtext: `It’s no obligation, can be done on any device, and takes less than a minute to complete.`
        },
        {
          title: `Submit Application`,
          subtitle: `(10mins)`,
          text: `If you qualify, we’ll need just a few pieces of information to give the IRS. For documents, most W2 business only need payroll documentation. Don’t worry we have plenty of responsive phone agents ready to help.`
        },
        {
          title: `Get Funded Directly`,
          subtitle: `(4-5 Months)`,
          text: `We process all the paperwork so all you have to do is sit back and wait for your check. We even have a Get Funded Immediately option.`
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.works{
  background: #D4E2F7;
  padding: 30px 0;
  @media(min-width:768px){
    padding: 60px 0;
  }
  h2{
    font-weight: 700;
    color: #59595A;
    margin-bottom: 30px;
    font-size: 35px;
    line-height: 40px;
    @media(min-width:768px){
      margin-bottom: 40px;
      font-size: 40px;
      line-height: 46px;
    }
  }
  &-items{
    @media(min-width:768px){
      display: flex;
      justify-content: space-between;
    }
  }
  &-item{
    background: #FFFFFF;
    border-radius: 15px;
    padding: 30px;
    @media(min-width:768px){
      flex: 1 calc(33.333% - 15px);
      max-width: calc(33.333% - 15px);
    }
    @media(max-width:767px){
      &:not(:first-child){
        margin-top: 15px;
      }
    }
  }
  .num{
    font-weight: 700;
    font-size: 70px;
    line-height: 80px;
    color: #fff;
    text-stroke: 1px #3068BB;
    -webkit-text-stroke: 1px #3068BB;
    margin-bottom: 20px;
  }
  h3{
    font-weight: 700;
    font-size: 23px;
    line-height: 26px;
    color: #181818;
  }
  h4{
    font-weight: 700;
    font-size: 23px;
    line-height: 26px;
    color: #FCD53F;
    margin-bottom: 20px;
  }
  p{
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #181818;
  }
  ul{
    padding: 20px 0 20px 20px;
    list-style: outside disc;
    li{
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: #3068BB;
    }
  }
}
</style>
