<template>
  <div id="AppLecturerEntityEditor">
    <h1></h1>
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
    ...mapActions(["fetchInstitutesFromAPI"]),
  },
  async mounted() {
    await this.fetchInstitutesFromAPI(this.apiLink);
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
