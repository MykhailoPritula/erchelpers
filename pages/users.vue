<template>
  <section class="page page-user">
    <div class="container">
      <UsersList />
    </div>
  </section>
</template>

<script>
export default {
  async fetch({ store }) {
    if (store.getters["users/users"].length === 0) {
      await store.dispatch("users/fetch");
    }
  }
}
</script>