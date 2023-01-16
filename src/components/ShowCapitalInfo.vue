<template>
  <div>
    <table class="table">
      <tr class="table__row">
        <th class="table__heading">
          <h2>City Name:</h2>
        </th>
        <td class="table__td">{{ capital.capital }}</td>
      </tr>
      <tr class="table__row">
        <th class="table__heading">Country:</th>
        <td class="table__td">{{ capital.name }}</td>
      </tr>
      <tr class="table__row">
        <th class="table__heading">Country name:</th>
        <td class="table__td">
          {{ capital.subregion }}
        </td>
      </tr>
      <tr class="table__row">
        <th class="table__heading">Country flag:</th>
        <td><img class="table__td__img" :src="capital.flags.png" /></td>
      </tr>
      <tr class="table__row">
        <th class="table__heading">Languages:</th>
        <td class="table__td">
          <p v-for="(language, idx) in capital.languages" :key="idx">
            {{ language.name }}
          </p>
        </td>
      </tr>
      <tr class="table__row">
        <th class="table__heading">Time zones:</th>
        <td class="table__td">
          <p v-for="(timezone, idx) in capital.timezones" :key="idx">
            {{ timezone }}
          </p>
        </td>
      </tr>

      <tr class="table__row">
        <th class="table__heading">Currencies:</th>
        <td class="table__td">
          <div v-for="(currency, idx) in capital.currencies" :key="idx">
            <p>Name: {{ currency.name }}</p>
            <p>Symbol: {{ currency.symbol }}</p>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Result } from "../types/CountriesTypes.interface";
export default defineComponent({
  props: {
    capital: {
      type: Object as PropType<Result>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
// Table styles
.table {
  background: #012b39;
  border-radius: 0.25em;
  border-collapse: collapse;
  margin: 1em auto;
}
.table__heading {
  border-bottom: 1px solid #364043;
  color: #e2b842;
  font-size: 0.85em;
  font-weight: 600;
  padding: 0.5em 1em;
  text-align: left;
}
.table__td {
  color: #fff;
  font-weight: 400;
  padding: 1em;
}
.table__row {
  transition: background 0.25s ease;
}
.table__row:hover {
  background: #014055;
}
.table .table__row .table__heading,
.table .table__row .table__td {
  text-align: left;
}
.table__td__img {
  width: 60px;
  height: 30px;
}
</style>
