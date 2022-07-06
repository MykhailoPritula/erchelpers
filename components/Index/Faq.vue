<template>
  <section id="faq" class="faq">
    <div class="container">
      <div class="title">
        <h2>Ready to Find Out How Much<br> You Can Qualify For?</h2>
        <button @click.prevent="scrollTo">Take the 60sec Quiz</button>
      </div>
      <div class="subtitle">Frequently Asked Questions:</div>
      <h3>Top Questions</h3>
      <div class="item" v-for="(item, index) in items1">
        <div class="question">{{ item.q }}</div>
        <div class="answer" v-if="item.a" v-html="item.a"></div>
        <ul v-if="item.list">
          <li v-for="itemList in item.list" v-html="itemList"></li>
        </ul>
      </div>
      <h3>Qualifications</h3>
      <div class="item" v-for="(item, index) in items2">
        <div class="question">{{ item.q }}</div>
        <div class="answer" v-if="item.a" v-html="item.a"></div>
        <ul class="bottom" v-if="item.list">
          <li v-for="itemList in item.list" v-html="itemList"></li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return {
      items1: [
        {
          q: `Q. Can my business qualify?`,
          a: `Yes. Businesses with W2 employees are eligible for up to $26K per employee.`
        },
        {
          q: `Q. What documents are needed?`,
          list: [`1. Payroll Report outlining all payments, deductions, contributions and taxes for each employee for each paycheck during your ERC eligibility period.`, `2. Quarterly tax document. Form 941.`, `3. Statement substantiating revenue reduction, supply chain issue or mandated business closure.`, `4. Did you receive a PPP loan?`, `5. Sign`]
        },
        {
          q: `Q. How much can I get?`,
          a: `You can get up to $26,000 per each W2 employee. This all depends on the number of employees you have and other revenue reduction figures. We’ll make sure the correct documents are gathered.`
        },
        {
          q: `Q. How do I get paid?`,
          a: `We help you file for this program by amending your 2020 and 2021 tax returns. This entitles you for the up to $26K ERC credit as outlined in the CARES Act.`
        },
        {
          q: `Q. Why do I need to amend my taxes?`,
          a: `The ERC program stopped after the 2021 tax year. However businesses can still amend their return and receive a check by claiming the credit. We help you amend the return so you get the max money the fastest.`
        },
        {
          q: `Q. How long will this program last?`,
          a: `Businesses can amend their tax returns until 2024. However it’s very likely the ERC Program will run out of funding before then. $400B dries up quick when more people find out about this Program.`
        },
        {
          q: `Q. Can I qualify even if I got PPP?`,
          a: `Yes! The rules have changed where people can get ERC even if they got PPP money.`
        },
        {
          q: `Q. How long until the money arrives?`,
          a: `Money is placed in escrow so that funds are disbursed to you as soon as the IRS sends your check (typically 3-4 months).`
        },
        {
          q: `Q. Is this a real government program?`,
          a: `Yes - You can view more about the Employee Retention Credit Program on the IRS’ Website https://www.irs.gov/newsroom/new-law-extends-covid-tax-credit-for-employers-who-keep-workers-on-payroll`
        },
        {
          q: `Q. Will I get in trouble with the IRS for filing?`,
          a: `Absolutely not. We work closely with people from the IRS to ensure you get the maximum credit.`
        },
        {
          q: `Q. How much do you charge?`,
          a: `Our service charge is based on a percentage of the credit recovered. We calculate and provide our fee with our free analysis. Since we are typically able to recover 10-20% more than someone less familiar with the program, our fee is very affordable. Just like a good CPA, using the right team for this process pays for itself.`
        },
        {
          q: `Q. Can’t I just have my CPA file? Why would I use Red ERC?`,
          a: `Of course. The challenge is the ERC credit is taken on your payroll returns and not through your business income tax returns, which is what most CPA's handle. Because of this most CPA's don't process this credit, unless they process your payroll in house. This is also a big reason why this credit is so underutilized. Since CPA's don't typically handle it and they are the tax experts, it has mostly fallen in a middle ground where few are able to effectively process the credit. Interestingly, we receive a large portion of our clients from CPA's.<br>
            At Red ERC we have decades of payroll experience, which has allowed us to specifically focus to understanding and maximizing the ERC program. In our experience we have found that due to the complexity (the ERC tax code is over 200 pages) and time investment necessary to understand the ERC program, very few are able to effectively maximize this sizeable credit for your business.
          `
        },
        {
          q: `Q. How long does it take to get my ERC Credit?`,
          a: `This is how the process works: you send us the required documents and we process an analysis at no charge. The process from start to finish usually happens in 2-3 weeks. If you wish to move forward, you will select your desired payment option and we file your claim. Once filed, refunds are released based on IRS backlog. Currently, the IRS has stipulated a 20 week minimum turnaround on the ERC refunds.`
        }
      ],
      items2: [
        {
          q: `Q. Is there a credit check involved? What if I have bad credit?`,
          a: `There is absolutely no credit check to see if you qualify. All credit levels can get ERC funding.`
        },
        {
          q: `Q. Can I get ERC Money if my business closed?`,
          a: `Yes, there is a possibility. It depends on when the business closed. `
        },
        {
          q: `Q. Can I get ERC Funds if I already took the PPP?`,
          a: `Yes. The Taxpayer Certainty and Disaster Tax Relief Act of 2020, enacted December 27, 2020, modified the ERC credit rules. One of the modifications included allowing a company to have a PPP loan and still take advantage of the ERC credit. However, you can't use the same dollar for dollar funds. We take this into account when processing your ERC credit.`
        },
        {
          q: `Q. How do I prove if there is a supply chain disruption, revenue reduction or business closure?`,
          a: `We will ask you to upload a statement substantiating your revenue reduction. This usually involves attaching a summary P&L for 2020 and 2021. Don’t worry we make the process very easy.`
        },
        {
          q: `Q. My revenue went up in 2020, can I still qualify for the ERC program?`,
          a: `Yes! There are two possible qualifications for 2020: revenue reduction, or a "full or partial shutdown of your business due to COVID-19". Specifically the IRS describes this as "A government authority required partial or full shutdown of your business during 2020 or 2021. This includes your operations being limited by commerce, inability to travel or restrictions of group meetings." Below are several examples of qualifying events:`,
          list: [`Example 1: A restaurant must close or limit its on-site dining. Such as having to close down every other table, due to COVID-19 restrictions.`,          `Example 2: A business that needs to meet with clients in person and has to cancel meetings due to COVID-19 restrictions.`,          `Example 3: A business has to reduce their operating hours because COVID-19 restrictions and cleaning requirements.`,          `Example 4: A business had delayed production timelines caused by supply chain disruptions.`,          `Example 5: A business with a planned event has to cancel that event, or restrict the amount of people who can attend due to COVID-19 restrictions.`]
        }
      ]
    }
  },
  methods: {
    scrollTo(){
      document.getElementById('quiz').scrollIntoView({block: "start", behavior: "smooth"});
    }
  }
}
</script>
<style lang="scss" scoped>
.faq{
  padding: 30px 0;
  @media(min-width:768px){
    padding: 60px 0;
  }
  .title{
    text-align: center;
    margin-bottom: 60px;
    @media(min-width:768px){
      margin-bottom: 120px;
    }
    h2{
      font-weight: 700;
      font-size: 35px;
      line-height: 1.2;
      color: #155A81;
      padding-bottom: 30px;
      @media(min-width:768px){
        font-size: 40px;
      }
    }
    button{
      max-width: 380px;
      width: 100%;
      line-height: 1.2;
      font-weight: 700;
      font-size: 23px;
      color: #fff;
      background: #FCD53F;
      border: none;
      border-radius: 15px;
      padding: 15px;
      transition: .5s ease;
      &:hover{
        background: #3068BB;
      }
    }
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