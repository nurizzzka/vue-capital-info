<template>
  <div id="app">
    <h1 class="h1">Enter any capital to get information about it!</h1>
    <form @submit.prevent="searchCapital(inputText)" class="form">
      <input type="text" v-model="inputText" class="form__input" />
      <button @click="searchCapital(inputText)" class="form__button">
        Search
      </button>
      <div v-if="data">
        <div v-for="capital in data" :key="capital.name">
          <ShowCapitalInfo :capital="capital" />
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
import { capitalSearch } from "./services/restCountriesAPI";
import { CountriesTypes } from "./types/CountriesTypes.interface";
import ShowCapitalInfo from "./components/ShowCapitalInfo.vue";
export default defineComponent({
  name: "App",
  components: {
    ShowCapitalInfo,
  },
  setup() {
    let capital = reactive<{ data: CountriesTypes }>({ data: [] });

    let inputText = ref("");

    const searchCapital = async (search: string): Promise<void> => {
      const value = await capitalSearch(search);
      capital.data = value;
    };
    return { searchCapital, ...toRefs(capital), inputText };
  },
});
</script>

<style lang="scss">
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #105469;
  font-family: "Open Sans", sans-serif;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

.h1 {
  margin: 1em;
}

// Input styles
.form__input {
  border: 0.4px solid #364043;
  border-radius: 0.25em;

  font-size: 0.85em;
  font-weight: 400;
  padding: 0.5em 0.8em;
}

.form__button {
  border: 0.4px solid #364043;
  border-radius: 0.25em;
  cursor: pointer;
  color: #e2b842;
  background: #012b39;

  font-size: 0.85em;
  font-weight: 400;
  padding: 0.5em 0.8em;
}

.form__button:hover {
  background: #014055;
  color: #fff;
  transition: background 0.2s ease-in;
}
</style>
