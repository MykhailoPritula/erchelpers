<template>
  <section class="benefits">
    <div class="shape"></div>
    <div class="container">

      <div class="benefits-item">
        <div class="benefits-left">
          <img src="@/assets/img/man_with_flower.png" >
        </div>
        <div class="benefits-right">
          <h3>Only 10% of $400B has been claimed!</h3>
          <p>
            Because the Gov’t Has Horrible Messaging. <br><br>
            American Businesses went through a lot in 2020 and 2021. The government responded by releasing the $2 Trillion CARES Act. <br><br>
            $400 Billion was carved out for businesses with W2 employees.The government has a lot on its hands, and failed to let American business people know they can qualify for their share. <br><br>
            The Employee Retention Credit or ERC Program was changed allowing businesses to claim $26,000 for each W2 Employee.
          </p>
        </div>
      </div>

      <div class="benefits-item">
        <div class="benefits-left">
          <img src="@/assets/img/couple.png" >
        </div>
        <div class="benefits-right">
          <h3>The ERC Program Has New Rules…But Most Still Don’t Realize They Qualify</h3>
          <p>The ERC Program was approved in December 2020. It has new rules, making it easier to claim the more than $400B set aside.</p>
          <ul>
            <li>All you need is claim one of the following:</li>
            <li>Supply Chain Disruption</li>
            <li>Revenue Reduction</li>
            <li>Operation Disruption (ie. You were forced to close sometime in 2020/21)</li>
          </ul>
        </div>
      </div>

      <div class="benefits-item">
        <div class="benefits-left">
          <img src="@/assets/img/building.png" >
        </div>
        <div class="benefits-right">
          <h3>Easy Done For You Processing With Guaranteed Approval</h3>
          <p>
            Because It Shouldn’t Be That Hard to Get <br><br>
            GetERC Specialists was started to help small businesses get funds without paying any fees. There’s no reason Americans should need to pay anything out of pocket to get the money approved for them. <br><br>
            We’ve partnered with certified tax processors who will guide you through each step in claiming your ERC Money. <br><br>
            We’ve also spend considerable time to build an easy 1min qualification quiz. It strips out unnecessary complexity to make it easy for simple funding. <br><br>
            That means we:
          </p>
          <ul>
            <li>Have a 1 Minute Application (compared to 45+ minutes of most banks).</li>
            <li>Get funding approval same day (compared to weeks of most banks).</li>
            <li>Have funds from US Treasury directly transferred to your bank in 3-4 months.</li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</template>
<style lang="scss" scoped>
.shape{
  background: radial-gradient(79.88% 79.88% at 89.02% 20.12%, #EBF3FA 0%, #77A8EF 100%);
  filter: blur(5vw);
  width: 20vw;
  height: 30vw;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  @media(min-width:992px){
    top: -25%;
  }
}
.benefits{
  position: relative;
  padding: 0 0 60px;
  &-item{
    @media(min-width:768px){
      display: flex;
      &:nth-child(even){
        .benefits-left{
          order: 2;
        }
      }
    }
    &:not(:first-child){
      margin-top: 60px;
    }
  }
  @media(min-width:768px){
    &-left, &-right{
      flex: 1 50%;
      width: 50%;
    }
  }
  &-left{
    @media(max-width:767px){
      margin-bottom: 40px;
    }
  }
  img{
    display: block;
    margin: 0 auto;
  }
  h3{
    font-weight: 700;
    color: #59595A;
    margin-bottom: 20px;
    font-size: 35px;
    line-height: 40px;
    @media(min-width:768px){
      font-size: 40px;
      line-height: 46px;
      margin-bottom: 40px;
    }
  }
  p{
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #181818;
  }
  ul{
    list-style: outside disc;
    padding: 20px 0 0 20px;
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