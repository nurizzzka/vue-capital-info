<template>
  <div>
    <h2>City: {{ capital.name }}, {{ capital.country }}</h2>
    <h3>{{ capital.localtime }}</h3>
    <h3>Weather: {{ capital.condition.text }}</h3>
    <span>C {{ capital.temp_c }} </span>
    <span>F {{ capital.temp_f }} </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { WeatherTypes } from "../types/WeatherTypes.interface";
export default defineComponent({
  props: {
    capital: {
      type: Object as PropType<WeatherTypes>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss"></style>
