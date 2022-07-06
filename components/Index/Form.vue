<template>
  <form @submit.prevent="submit" class="form">
    <div class="form-progress" :style="`width: ${(step + 1) * 100 / (quiz.length + 1)}%`"></div>
    <div class="step" v-for="(item, i) in quiz" v-show="step === i">
      <h2 v-html="item.question"></h2>
      <h3 v-if="step === 0">
        <svg width="17" height="23" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5306 1.22407C6.19336 0.0793971 -9.40939 2.75616 10.8777 22.6206M9.29278 14.5903C9.328 16.6859 9.68373 21.2153 10.8249 22.5678C9.59215 21.8458 5.38329 20.5602 2.68891 20.296" stroke="#75A7EF"/></svg>
        Please Select One
        <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.999659 1.22407C11.3369 0.0793971 26.9397 2.75616 6.65257 22.6206M8.2375 14.5903C8.20227 16.6859 7.84655 21.2153 6.7054 22.5678C7.93812 21.8458 12.147 20.5602 14.8414 20.296" stroke="#75A7EF"/></svg>
      </h3>
      <div class="form-options" v-if="item.options === 'Number'">
        <input type="number" min="0" v-model="number" placeholder="Enter number">
        <div class="buttons">
          <button @click.prevent="chooseAnswer(number, i)" :key="number" class="yellow">Submit</button>
          <button class="back" @click.prevent="stepBack"><img src="@/assets/img/arrow-back.svg"></button>
        </div>
      </div>
      <div class="form-options" v-else >
        <button v-for="option in item.options" @click.prevent="chooseAnswer(option, i)" :key="option">{{ option }}</button>
      </div>
    </div>
    <div class="step" v-if="step === quiz.length">
      <h2>Enter info below to get your results.</h2>
      <input type="text" placeholder="Company Name" v-model="company" required />
      <input type="text" placeholder="First Name" v-model="first_name" required />
      <input type="text" placeholder="Last Name" v-model="last_name" required />
      <input type="email" placeholder="Email" v-model="email" required />
      <input type="tel" @input="phoneNumberInput" placeholder="Phone" v-model="phone" minlength="8" maxlength="14" required />
      <input type="submit" value="Submit">
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      step: 0,
      number: null,
      first_name: null,
      last_name: null,
      email: null,
      phone: null,
      company: null,
      quiz: [
        {
          question: 'Which Best Describes<br> Your Busines?',
          options: ['I have W2 Employees', 'Self-Employed', 'I’m a Startup without W2 Employees'],
          answer: null
        },
        {
          question: 'How Many W2 Employees<br> Do You Have?',
          options: 'Number',
          answer: null
        },
        {
          question: 'Did You Experience a Supply Chain Disruption<br> in 2020 or 2021?',
          options: ['Yes', 'No'],
          answer: null
        },
        {
          question: 'Did You Have a Decrease in Revenue in 2020 or 2021 compared to 2019?',
          options: ['Yes', 'No'],
          answer: null
        },
      ],
      lead_source: null,
      utm_source: '',
      utm_medium: '',
      utm_campaign: '',
    }
  },
  mounted() {
    this.lead_source = window.location.href
    if (this.$route.query.utm_source) this.utm_source = this.$route.query.utm_source
    if (this.$route.query.utm_medium) this.utm_medium = this.$route.query.utm_medium
    if (this.$route.query.utm_campaign) this.utm_campaign = this.$route.query.utm_campaign
  },
  computed: {
    result () {
      return this.$store.state.result
    }
  },
  methods: {
    chooseAnswer(a, i){
      this.quiz[i].answer = a
      this.step = this.step + 1
      if(this.quiz[i].answer === 'Self-Employed'){
        this.step = this.step + 2
      }
    },
    stepBack(){
      this.step = this.step - 1
    },
    phoneNumberInput(e) {
      let arr = e.target.value.replace(/[^\dA-Z]/g, '').replace(/[\s]/g, '').split('');
      this.phone = arr.toString().replace(/[,]/g, '');
    },
    submitScripts(){
      fbq('track', 'Purchase', {
        value: 100,
        currency: 'USD'
      })
      snaptr('track', 'view_content')
      snaptr('track', 'SIGN_UP')
      gtag('event', 'conversion', {'send_to': 'AW-10904855630/UFseCMKp3MQDEM7I688o'})
    },
    submit() {
      const api = process.env.NODE_ENV === 'production' ? `https://erchelpers.com` : `http://${process.env.API}`,
            newUser = {
              first_name: this.first_name,
              last_name: this.last_name,
              email: this.email,
              phone: this.phone,
              company: this.company,
              quiz: JSON.stringify(this.quiz)
            }
            
      if(this.quiz[0].answer === 'I have W2 Employees' && this.quiz[1].answer >= 2){
        this.scripts = true
        this.submitScripts()
        this.$store.commit('setResult', 1)
      } else {
        this.$store.commit('setResult', 3)
      }

      sessionStorage.user = JSON.stringify(newUser)

      this.$axios.get(`${api}/api/lead?firstname=${this.first_name}&lastname=${this.last_name}&email=${this.email}&phone=${this.phone}&company=${this.company}&data=${JSON.stringify(this.quiz)}&lead_source=${this.lead_source}&utm_source=${this.utm_source}&utm_medium=${this.utm_medium}&utm_campaign=${this.utm_campaign}`)
        .then(response => {
          if(response.data.status === "error"){
            this.$swal(response.data.msg)
          } else {
            return this.$axios.post(`${api}/api/users`, newUser)
          }
        })
        .then(res => {
          if (res.data.status === "error") {
            this.$swal(res.data.message);
          } else {
            this.$emit("add-user", res.data);
            this.$router.push('/thank-you')
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.form{
  background: #D4E2F7;
  border-radius: 15px;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  padding: 30px 15px 60px;
  @media(min-width:768px){
    padding: 60px 30px 120px;
  }
  &-progress{
    background: #75A7EF;
    height: 15px;
    position: absolute;
    left: 0; top: 0;
    width: 0%;
    @media(min-width:768px){
      height: 30px;
    }
  }
  &:before{
    content: "";
    background: #E3EEF8;
    position: absolute;
    left: 0; top: 0;
    width: 100%;
    height: 15px;
    @media(min-width:768px){
      height: 30px;
    }
  }
  &:after{
    content: "🔒 256-bit Secure Enscryption";
    background: #C7D6ED;
    position: absolute;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    height: 30px;
    text-align: center;
    color: #181818;
    left: 0; bottom: 0;
    width: 100%;
  }
  h2{
    font-weight: 700;
    font-size: 30px;
    line-height: 1.2;
    text-align: center;
    color: #181818;
    margin-bottom: 10px;
  }
  h3{
    font-weight: 500;
    font-size: 14px;
    line-height: 1.1;
    text-align: center;
    color: #181818;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media(min-width:768px){
      font-size: 16px;
    }
    svg{
      display: block;
      margin-left: 10px;
      &:first-child{
        margin-right: 15px;
        margin-left: 0;
      }
    }
  }
  &-options{
    .buttons{
      .back{
        background: #C7D6ED;
        border-radius: 15px;
        box-shadow: none;
      }
      @media(max-width:767px){
        display: flex;
        flex-direction: row-reverse;
        .back{
          flex: 1 30%;
        }
      }
    }
    button{
      border: none;
      font-weight: 500;
      font-size: 20px;
      line-height: 1.1;
      text-align: center;
      color: #59595A;
      background: #FFFFFF;
      box-shadow: 0px 4px 10px #C7D6ED, 0px -4px 0px #F8F8F8 inset;
      border-radius: 15px;
      height: 60px;
      display: block;
      margin: 15px auto;
      width: 340px;
      max-width: 100%;
      transition: .5s ease-in-out;
      @media(min-width:576px){
        height: 74px;
        font-size: 23px;
      }
      @media(min-width:768px){
        height: 77px;
        width: 450px;
      }
      &:hover{
        outline: 2px solid #59595A;
      }
      &:active, &.active{
        background: #75A7EF !important;
        color: #fff !important;
        box-shadow: 0px 4px 10px #C7D6ED, 0px -4px 0px #75A7EF inset !important;
      }
      &.yellow{
        color: #fff;
        background: #FCD53F;
        box-shadow: 0px 4px 10px #C7D6ED, 0px -4px 0px #FBCA38 inset;
      }
    }
  }
  input{
    display: block;
    margin: 0 auto;
    width: 450px;
    max-width: 100%;
    height: 77px;
    background: #FFFFFF;
    border: 2px solid #A4BCE1;
    border-radius: 15px;
    font-weight: 500;
    font-size: 23px;
    color: #59595A;
    padding: 0 30px;
    &:not(:first-child){
      margin-top: 15px;
    }
    &::placeholder {
      color: #A4BCE1;
    }

    &[type="submit"]{
      border: none;
      font-weight: 500;
      font-size: 23px;
      line-height: 26px;
      text-align: center;
      color: #fff;
      background: #FCD53F;
      box-shadow: 0px 4px 10px #C7D6ED, 0px -4px 0px #FBCA38 inset;
      border-radius: 15px;
      height: 74px;
      display: block;
      margin: 15px auto;
      width: 450px;
      max-width: 100%;
      transition: .5s ease-in-out;
      @media(min-width:768px){
        height: 77px;
      }
      &:hover{
        outline: 2px solid #59595A;
      }
      &:active, &.active{
        background: #75A7EF;
        color: #fff;
        box-shadow: 0px 4px 10px #C7D6ED, 0px -4px 0px #75A7EF inset;
      }
    }
  }
}
</style>