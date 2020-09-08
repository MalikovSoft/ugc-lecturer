<template>
  <div id="AppLecturerEntityEditor">
    <form id="FormLecturerUGC"></form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AppLecturerEntityEditor",
  components: {},
  computed: {
    ...mapGetters(["ugcId", "apiLink", "backLink"]),
  },
  methods: {
    ...mapActions([
      "fetchInstitutesFromAPI",
      "fetchIFacultiesFromAPI",
      "fetchChairsFromAPI",
      "fetchDegreesFromAPI",
      "fetchPositionsFromAPI",
      "fetchStatesFromAPI",
    ]),
  },
  async mounted() {
    await this.fetchInstitutesFromAPI(this.apiLink);
    await this.fetchIFacultiesFromAPI(this.apiLink);
    await this.fetchChairsFromAPI(this.apiLink);
    await this.fetchDegreesFromAPI(this.apiLink);
    await this.fetchPositionsFromAPI(this.apiLink);
    await this.fetchStatesFromAPI(this.apiLink);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
