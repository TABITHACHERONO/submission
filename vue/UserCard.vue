<template>
  <div class="user-card">
    <h2>{{ user.name }}</h2>
    <a :href="`mailto:${user.email}`">{{ user.email }}</a>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>
