<template>
  <section>
    <div class="container" v-if="users.length">
      <h1>Current users</h1>
      <div v-for="user of users" :key="user.id" class="user">
        <div class="user-item"><strong>ID:</strong> {{ user.id }} </div>
        <div class="user-item"><strong>Name:</strong> {{ user.first_name }} {{ user.last_name }} </div>
        <div class="user-item"><strong>Company:</strong> {{ user.company }} </div>
        <div class="user-item"><strong>Email:</strong> {{ user.email }} </div>
        <div class="user-item"><strong>Phone:</strong> {{ user.phone }}</div>
        <div class="user-item" v-for="item in JSON.parse(user.quiz)"><strong>{{ item.question }}:</strong> {{ item.answer }}</div>
      </div>
    </div>
    <h3 v-else>There are no users added yet!</h3>
  </section>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.getters["users/users"];
    },
  },
};
</script>

<style lang="scss" scoped>
.user{
  margin: 30px 0;
  strong{
    font-weight: 700;
  }
}
</style>