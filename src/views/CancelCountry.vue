<template>
  <input v-model="countryString" placeholder="edit me">
</template>

<script>
export default {
  data() {
    return {
      countryString: this.countryString,
      previousValue: '',
    }
  }
}
</script>
