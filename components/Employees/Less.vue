<template>
  <div class="container">
    <h1>Congratulations! <br> You pre-qualified for the ERC Program!</h1>
    <svg width="102" height="109" viewBox="0 0 102 109" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.5 22C40.5 20.6193 39.3807 19.5 38 19.5C36.6193 19.5 35.5 20.6193 35.5 22H40.5ZM34 65.5V68V65.5ZM20 51.5H22.5H20ZM22.5 49C22.5 47.6193 21.3807 46.5 20 46.5C18.6193 46.5 17.5 47.6193 17.5 49H22.5ZM68 65.5V68V65.5ZM82 51.5H79.5H82ZM84.5 49C84.5 47.6193 83.3807 46.5 82 46.5C80.6193 46.5 79.5 47.6193 79.5 49H84.5ZM66.5 22C66.5 20.6193 65.3807 19.5 64 19.5C62.6193 19.5 61.5 20.6193 61.5 22H66.5ZM20 84H22.5V81.5H20V84ZM20 102H17.5V108.036L21.7678 103.768L20 102ZM38 84V81.5H36.9645L36.2322 82.2322L38 84ZM35.5 22V40H40.5V22H35.5ZM22.5 51.5V49H17.5V51.5H22.5ZM34 63C27.6487 63 22.5 57.8513 22.5 51.5H17.5C17.5 60.6127 24.8873 68 34 68V63ZM84.5 51.5V49H79.5V51.5H84.5ZM68 68C77.1127 68 84.5 60.6127 84.5 51.5H79.5C79.5 57.8513 74.3513 63 68 63V68ZM61.5 22V40H66.5V22H61.5ZM5.5 18C5.5 11.0964 11.0964 5.5 18 5.5V0.5C8.33502 0.5 0.5 8.33502 0.5 18H5.5ZM5.5 69V18H0.5V69H5.5ZM18 81.5C11.0964 81.5 5.5 75.9036 5.5 69H0.5C0.5 78.665 8.33502 86.5 18 86.5V81.5ZM20 81.5H18V86.5H20V81.5ZM22.5 102V84H17.5V102H22.5ZM36.2322 82.2322L18.2322 100.232L21.7678 103.768L39.7678 85.7678L36.2322 82.2322ZM84 81.5H38V86.5H84V81.5ZM96.5 69C96.5 75.9036 90.9036 81.5 84 81.5V86.5C93.665 86.5 101.5 78.665 101.5 69H96.5ZM96.5 18V69H101.5V18H96.5ZM84 5.5C90.9036 5.5 96.5 11.0964 96.5 18H101.5C101.5 8.33502 93.665 0.5 84 0.5V5.5ZM18 5.5H84V0.5H18V5.5ZM68 63H34V68H68V63Z" fill="#C7D6ED"/></svg>
    <p><b>Would you like that transferred into your account?</b></p>
    <p>You exact ERC Credit amount can be given once we receive some documents from you. You will be emailed a secure, encrypted upload link to the email you provided.</p>
    <p>Evan from our New York office will be calling you within the next business day. You can text/call him for faster service at <a href="tel:+18667010050"><b>866-701-0050</b></a>. <br> We’re very friendly and love helping American business people get ERC Money!</p>
    <p>Rest assured we will process everything and do all the busywork. Business owners have enough on their hands with all the craziness in the economy. We look forward to serving and getting you the maximum ERC amount you’re entitled to. </p>
    <p>The ERC Program is still relatively unknown. We've included more info about the program below:</p>
    <EmployeesFaq :questions="itemsQuestions" :qualifications="itemsQualifications"/>
  </div>
</template>
<script>
export default {
  data(){
    return {
      itemsQuestions: [
        {
          q: `Q. Can my business qualify?`,
          a: `Yes. Businesses with W2 employees are eligible for up to $26K per employee.`
        },
        {
          q: `Q. What documents are needed?`,
          list: [`2020-21 Profit and Loss`, `2020-21 Payroll Summary`, `2020-21 Quarterly Payroll Reports (941, 943, 944)`, `PPP Loan Information (optional, only if you took PPP)`, `COVID Gov’t Suspension Information (if applicable)`, `Supply Chain Issues Information (if applicable)`]
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
          a: `Money is placed in escrow so that funds are disbursed to you as soon as the IRS sends your check (typically 6-7 months). We also may offer different pay plans so that you can get money faster.`
        },
        {
          q: `Q. Is this a real government program?`,
          a: `Yes - You can view more about the Employee Retention Credit Program on the IRS’ Website https://www.irs.gov/newsroom/new-law-extends-covid-tax-credit-for-employers-who-keep-workers-on-payroll`
        },
        {
          q: `Q. Will I get in trouble with the IRS for filing?`,
          a: `Absolutely not. We work closely with people from the IRS to ensure you get the maximum credit. We also provide full audit protection so that you never have to lift a finger in case of the worst.`
        },
        {
          q: `Q. How much do you charge?`,
          a: `Our service charge is based on a percentage of the credit recovered. We calculate and provide our fee with our free analysis. Since we are typically able to recover 10-20% more than someone less familiar with the program, our fee is very affordable. Just like a good CPA, using the right team for this process pays for itself.`
        },
        {
          q: `Q. Can’t I just have my CPA file? Why would I use Red ERC?`,
          a: `Of course you can. The challenge is the ERC credit is taken on your payroll returns and not through your business income tax returns, which is what most CPA's handle. Because of this most CPA's don't process this credit, unless they process your payroll in house. This is also a big reason why this credit is so underutilized. Since CPA's don't typically handle it and they are the tax experts, it has mostly fallen in a middle ground where few are able to effectively process the credit. Interestingly, we receive a large portion of our clients from CPA's. <br><br> At ERC Helpers, we have decades of payroll experience, which has allowed us to specifically focus to understanding and maximizing the ERC program. In our experience we have found that due to the complexity (the ERC tax code is over 200 pages) and time investment necessary to understand the ERC program, very few are able to effectively maximize this sizeable credit for your busines`
        },
        {
          q: `Q. How long does it take to get my ERC Credit?`,
          a: `This is how the process works: you send us the required documents and we process an analysis at no charge. The process from start to finish usually happens in 2-3 weeks. If you wish to move forward, you will select your desired payment option and we file your claim. Once filed, refunds are released based on IRS backlog. Currently, the IRS has stipulated a 20 week minimum turnaround on the ERC refunds.`
        }
      ],
      itemsQualifications: [
        {
          q: `Q. Is there a credit check involved? What if I have bad credit?`,
          a: `There is absolutely no credit check to see if you qualify. All credit levels can get ERC funding.`
        },
        {
          q: `Q. Can I get ERC Money if my business closed?`,
          a: `Yes, there is a possibility. It depends on when the business closed.`
        },
        {
          q: `Q. Can I get ERC Funds if I already took the PPP?`,
          a: `Yes. The Taxpayer Certainty and Disaster Tax Relief Act of 2020, enacted December 27, 2020, modified the ERC credit rules. One of the modifications included allowing a company to have a PPP loan and still take advantage of the ERC credit. However, you can't use the same dollar for dollar funds. We take this into account when processing your ERC credit.`
        },
        {
          q: `Q. How do I prove if there is a supply chain disruption, revenue reduction or business closure?`,
          a: `We will ask you to upload a statement substantiating your revenue reduction, closure or supply chain issue. The rules have loosened. Don’t worry we make the process very easy.`
        },
        {
          q: `Q. My revenue went up in 2020, can I still qualify for the ERC program?`,
          a: `Yes! There are two possible qualifications for 2020: revenue reduction, or a "full or partial shutdown of your business due to COVID-19". Specifically the IRS describes this as "A government authority required partial or full shutdown of your business during 2020 or 2021. This includes your operations being limited by commerce, inability to travel or restrictions of group meetings." Below are several examples of qualifying events:`,
          list: [`Example 1: A restaurant must close or limit its on-site dining. Such as having to close down every other table, due to COVID-19 restrictions.`, `Example 2: A business that needs to meet with clients in person and has to cancel meetings due to COVID-19 restrictions.`, `Example 3: A business has to reduce their operating hours because COVID-19 restrictions and cleaning requirements.`, `Example 4: A business had delayed production timelines caused by supply chain disruptions.`, `Example 5: A business with a planned event has to cancel that event, or restrict the amount of people who can attend due to COVID-19 restrictions.`]
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
h1{
  font-weight: 700;
  font-size: 35px;
  line-height: 40px;
  text-align: center;
  color: #3068BB;
  margin-bottom: 40px;
  @media(min-width:768px){
    font-size: 40px;
    line-height: 46px;
  }
}
svg{
  display: block;
  margin: 0 auto 40px;
}
p{
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  line-height: 22px;
  color: #181818;
  margin-bottom: 22px;
  text-align: left;
}
</style>