<template>
  <div id="AppLecturerEntityEditor">
    <form id="FormLecturerUGC" class="p-5">
      <div class="form-row">
        <div class="col-md-9">
          <div class="form-row mb-2">
            <div class="col input-group">
              <div class="input-group-prepend">
                <label
                  for="fio"
                  class="input-group-text font-weight-bold p-0 pr-2 pl-2"
                >ФИО преподавателя:</label>
              </div>
              <input
                id="fio"
                type="text"
                class="form-control form-control-sm"
                :value="fio"
                @input="setFio"
              />
            </div>
          </div>
          <div class="form-row mb-2">
            <div class="col input-group">
              <label for="degree" class="font-weight-bold m-0">Ученая степень:</label>
              <v-select
                id="degree"
                label="title"
                :options="degrees"
                :value="academicDegree"
                @input="setAcademicDegree"
              ></v-select>
            </div>
            <div class="col input-group">
              <label for="status" class="font-weight-bold m-0">Ученое звание:</label>
              <v-select
                id="status"
                label="title"
                :options="statuses"
                :value="academicStatus"
                @input="setAcademicStatus"
              ></v-select>
            </div>
            <div class="col input-group">
              <label for="position" class="font-weight-bold m-0">Должность:</label>
              <v-select
                id="position"
                label="title"
                :options="positions"
                :value="position"
                @input="setPosition"
              ></v-select>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AppLecturerEntityEditor",
  components: {},
  computed: {
    ...mapGetters([
      "ugcId",
      "apiLink",
      "backLink",
      "content",
      "fio",
      "degrees",
      "statuses",
      "positions",
      "academicDegree",
      "academicStatus",
      "position",
    ]),
  },
  methods: {
    ...mapActions([
      "fetchInstitutesFromAPI",
      "fetchIFacultiesFromAPI",
      "fetchChairsFromAPI",
      "fetchDegreesFromAPI",
      "fetchPositionsFromAPI",
      "fetchStatusesFromAPI",
      "fillForm",
      "setFio",
      "setAcademicDegree",
      "setAcademicStatus",
      "setPosition",
    ]),
  },
  async mounted() {
    await this.fetchInstitutesFromAPI(this.apiLink);
    await this.fetchIFacultiesFromAPI(this.apiLink);
    await this.fetchChairsFromAPI(this.apiLink);
    await this.fetchDegreesFromAPI(this.apiLink);
    await this.fetchPositionsFromAPI(this.apiLink);
    await this.fetchStatusesFromAPI(this.apiLink);
    await this.fillForm(this.content);
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
.v-select {
  width: 100%;
}
</style>
