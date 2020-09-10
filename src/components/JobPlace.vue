<template>
  <div class="form-row jobplace">
    <div class="col input-group">
      <label v-bind:for="`institute-${jobIndex}`" class="font-weight-bold m-0">Институт:</label>
      <v-select
        :id="`institute-${jobIndex}`"
        label="title"
        :options="institutes"
        :value="jobPlace(jobIndex).institute"
        @input="setInstitute"
      ></v-select>
    </div>
    <div class="col input-group">
      <label v-bind:for="`faculty-${jobIndex}`" class="font-weight-bold m-0">Факультет:</label>
      <v-select
        :id="`faculty-${jobIndex}`"
        label="title"
        :options="facultiesByInstitute(jobPlace(jobIndex).institute)"
        :value="jobPlace(jobIndex).faculty"
        @input="setFaculty"
      ></v-select>
    </div>
    <div class="col input-group">
      <label v-bind:for="`chair-${jobIndex}`" class="font-weight-bold m-0">Кафедра:</label>
      <v-select
        :id="`chair-${jobIndex}`"
        label="title"
        :options="chairsByFaculty(jobPlace(jobIndex).faculty)"
        :value="jobPlace(jobIndex).chair"
        @input="setChair"
      ></v-select>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "JobPlace",
  props: {
    jobIndex: Number,
  },
  computed: {
    ...mapGetters([
      "jobPlace",
      "institutes",
      "facultiesByInstitute",
      "chairsByFaculty",
    ]),
  },
  methods: {
    setInstitute(value) {
      let payload = {
        value: value,
        index: this.jobIndex,
      };
      this.$store.dispatch("updateJobInstitute", payload);
    },
    setFaculty(value) {
      let payload = {
        value: value,
        index: this.jobIndex,
      };
      this.$store.dispatch("updateJobFaculty", payload);
    },
    setChair(value) {
      let payload = {
        value: value,
        index: this.jobIndex,
      };
      this.$store.dispatch("updateJobChair", payload);
    },
  },
};
</script>

<style scoped>
.jobplace {
  background-color: antiquewhite;
  padding: 5px;
}
.jobplace:first-child {
  border-radius: 0 5px 0 0;
}
.jobplace:last-child {
  border-radius: 0 0 5px 5px;
}
</style>