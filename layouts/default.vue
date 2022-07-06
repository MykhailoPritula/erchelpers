<template>
  <main class="layout layout-default">
    <Nuxt />
  </main>
</template>
<script>
export default {
  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Most Businesses with 2+ W2 Employees Don’t Realize They Can Get Approved for The ERC Program, and Get $26K For EACH W2 Employee!',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'erc, helpers, specialists, Businesses, Employees, Realize, ERC, Program, W2',
        },
        {
          hid: 'theme-color',
          name: 'theme-color',
          content: '#ffffff',
        },
      ]
    }
  }
}
</script>
<style lang="scss">
.layout-default{
  position: relative;
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;700&display=swap');
  *{
    font-family: 'Outfit', sans-serif;
  }
  .container {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    z-index: 2;
    @media (min-width: 768px) {
      max-width: 768px;
    }
    @media (min-width: 992px) {
      max-width: 992px;
    }
    @media (min-width: 1200px) {
      max-width: 1200px;
    }
  }
  .scripts{
    display: none;
  }
}
</style>