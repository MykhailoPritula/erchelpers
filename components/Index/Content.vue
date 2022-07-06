<template>
  <section class="tabs">
    <div v-if="index === 0">
      <p>Most<span> Businesses with 2+ W2 Employees</span> Don’t Realize They Can Get Approved for The ERC Program, and Get $26K For EACH W2 Employee!</p>
      <IndexStars />
      <ul>
        <li>13,780 Happy Customers, and $2+ Billion in Forgivable ERC Money</li>
        <li>Easy done for you process (We handle all the paperwork)</li>
        <li>No Fees, Credit Check, Collateral or Personal Guarantee</li>
      </ul>
      <span class="text">Take the 60sec Quiz to Find Out If You Qualify, and How Much You Can Get</span>
    </div>
    <div class="tab1" v-else-if="index === 1">
      <p>COVID-19 has been a challenge for all of us. As the world shut down the economy came to a halt, leaving the future of many businesses in a precarious position. As we begin to find normalcy again, businesses now have to focus on recovering and fortunately, several government programs are easing this process.</p>
      <p>One such program is the Employee Retention Credit or ERC, which is a generous stimulus program designed to bolster those businesses that were able to retain their employees during this challenging time. Due to the extremely complex tax code and qualifications, it is severely underutilized. Details of the program include:</p>
      <ul>
        <li>Up to $26,000 Per Employee</li>
        <li>Qualify with Decreased Revenue, Covid Event, or Supply Chain Disruption</li>
        <li>No Limit on Funding (ERC Is Not a Loan)</li>
        <li>ERC is a Refundable Tax Credit</li>
      </ul>
      <span>See the IRS Tax Code About ERC Here - link to<a href="https://www.irs.gov/newsroom/new-law-extends-covid-tax-credit-for-employers-who-keep-workers-on-payroll"> https://www.irs.gov/newsroom/new-law-extends-covid-tax-credit-for-employers-who-keep-workers-on-payroll</a></span>
    </div>
    <div class="tab2" v-else-if="index === 2">
      <p>Red ERC is dedicated to helping small businesses maximize the CARES Act Employee Retention Credit (ERC).</p>
      <p>We partner with specialty CPA and filing firms who work closely with the IRS to ensure accuracy, security and maximum refund amount.</p>
      <p>We’re located in Wyoming and look forward to helping you. Please Contact Us for further questions.</p>
    </div>
    <div class="tab3" v-else-if="index === 3">
      <div class="title">
        Please reach out to us with any questions comments or concerns.
      </div>
      <form @submit.prevent="submitContact">
        <div class="field">
          <input v-model="name" type="text" required placeholder="Enter your Name"/>
        </div>
        <div class="field">
          <input v-model="email" type="email" required placeholder="Enter your email address"/>
        </div>
        <div class="field">
          <textarea v-model="message" required placeholder="Enter your message"></textarea>
        </div>
        <input class="button" type="submit" value="Submit">
      </form>
    </div>
    <div class="tab5" v-else-if="index === 5">
      <IndexPrivacy />
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return {
      name: null,
      email: null,
      message: null
    }
  },
  computed: {
    index(){
      return this.$store.state.index
    }
  },
  methods: {
    submitContact(e){
      e.preventDefault()
      const api = process.env.NODE_ENV === 'production' ? `https://erchelpers.com` : `http://${process.env.API}`
      this.$axios.get(`${api}/api/contact?name=${this.name}&email=${this.email}&message=${this.message}`)
        .then(response => {
          if(response.data.status === "error"){
            this.$swal(`${response.data.status} ${response.data.msg}`);
          } else {
            this.$swal(`${response.data.status} ${response.data.msg}`);
            this.name = null
            this.email = null
            this.message = null
          }
        })
    }
  }
}
</script>
<style lang="scss" scoped>
p{
  color: #59595A;
  font-weight: 700;
  font-size: 35px;
  margin-bottom: 20px;
  @media(min-width:768px){
    font-size: 40px;
    margin-bottom: 40px;
    color: #3068BB;
  }
  span{
    color: #3068BB;
    @media(min-width:768px){
      color: #59595A;
    }
  }
}
ul{
  list-style-type: disc;
  color: #181818;
  margin-bottom: 20px;
  margin-left: 20px;
  li{
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    line-height: 1.2;
  }
}
span{
  color: #3068BB;
  font-family: 'Inter', sans-serif;
}
ul, .text{
  font-weight: 400;
  font-size: 15px;
  line-height: 1.2;
  @media(min-width:768px){
    font-size: 18px;
  }
}
.text{
  font-weight: 700;
  font-size: 18px;
}
.tab1, .tab2{
  background: #E3EEF8;
  border-radius: 15px;
  padding: 20px;
  @media(min-width:768px){
    background: none;
  }
  p, ul, span{
    color: #181818;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 15px;
  }
  a{
    color: #3068BB;
  }
}
.tab3{
  .title{
    background: #E3EEF8;
    border-radius: 15px;
    padding: 20px;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.2;
    color: #181818;
    margin-bottom: 20px;
    @media(min-width:768px){
      background: none;
    }
  }
  input, textarea{
    border: 2px solid #E3EEF8;
    border-radius: 15px;
    padding: 20px;
    width: 100%;
    margin-bottom: 20px;
    color: #59595A;
    font-weight: 400;
    font-size: 18px;
    font-family: 'Inter', sans-serif;
    line-height: 1.2;
    &::placeholder {
      color: #A4BCE1;
    }
  }
  textarea{
    resize: none;
    height: 200px;
  }
  .button{
    background: #FCD53F;
    border: none;
    color: #fff;
    font-weight: 700;
    font-size: 23px;
    line-height: 1.2;
    transition: .5s ease-in-out;
    &:hover{
      outline: 2px solid #59595A;
    }
  }
}
</style>