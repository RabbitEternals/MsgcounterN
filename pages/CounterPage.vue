<template>
  <div class="m-3">
    <div class="mb-3">
      <button class="btn btn-primary mb-4" style="width: 50%" id="increaseButton" @click="increase">Increase</button>
      <button class="btn btn-primary mb-4" style="width: 50%" id="decreaseButton" @click="decrease">Decrease</button>
    </div>
    <div class="alert alert-secondary text-center" id="numberOutput">{{ number }}</div>
  </div>
</template>

<script>
export default {
  name: "CounterPage",
  data() {
    return {
      number: 0
    }
  },
  methods: {
    increase() {
      this.number++;
    },
    decrease() {
      this.number--;
    }
  }
}
</script>

<style scoped>

</style>
