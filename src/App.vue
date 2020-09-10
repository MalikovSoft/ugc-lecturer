<template>
  <div id="AppLecturerEntityEditor">
    <form id="FormLecturerUGC" class="p-5">
      <div class="form-row">
        <div class="col-md-9">
          <div class="form-row mb-2">
            <div class="col input-group">
              <div class="input-group-prepend">
                <label for="fio" class="input-group-text font-weight-bold p-0 pr-2 pl-2">
                  <font-awesome-icon icon="user" class="mr-1" />ФИО преподавателя:
                </label>
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
          <div class="form-row">
            <div class="col input-group">
              <div class="jobplace-header p-2 align-self-end">
                <h5 class="font-weight-bold mt-auto mb-0">Место работы:</h5>
              </div>
              <button type="button" class="btn btn-secondary btn-sm ml-2" @click="addJob">
                <font-awesome-icon icon="plus" />
                <p class="m-0">добавить</p>
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <img-inputer
            v-model="photoFile"
            theme="light"
            size="normal"
            placeholder="Фотография преподавателя"
            @input="setPhoto"
          />
        </div>
      </div>
      <job-place v-for="(job,index) in jobPlaces" :key="`job-${index}`" v-bind:jobIndex="index" />
      <div class="form-row mt-5 mb-3">
        <div class="col input-group">
          <div class="input-group-prepend">
            <label for="email" class="input-group-text font-weight-bold p-0 pr-2 pl-2">
              <font-awesome-icon icon="at" class="mr-1" />Email:
            </label>
          </div>
          <input
            type="text"
            id="email"
            class="form-control form-control-sm"
            :value="email"
            @input="setEmail"
          />
        </div>
        <div class="col input-group">
          <div class="input-group-prepend">
            <label for="eduLevel" class="input-group-text font-weight-bold p-0 pr-2 pl-2">
              <font-awesome-icon icon="graduation-cap" class="mr-1" />Уровень образования:
            </label>
          </div>
          <input
            type="text"
            id="eduLevel"
            class="form-control form-control-sm"
            :value="eduLevel"
            @input="setEduLevel"
          />
        </div>
      </div>
      <div class="form-row mb-3">
        <div class="col input-group">
          <div class="input-group-prepend">
            <label
              for="totalWorkExperience"
              class="input-group-text font-weight-bold p-0 pr-2 pl-2"
            >
              <font-awesome-icon icon="briefcase" class="mr-1" />Общий стаж работы:
            </label>
          </div>
          <vue-numeric-input
            id="totalWorkExperience"
            align="center"
            class="form-control form-control-sm m-0 p-0"
            :value="totalWorkExperience"
            @change="setTotalWorkExperience"
          />
        </div>
        <div class="col input-group">
          <div class="input-group-prepend">
            <label
              for="workExperienceOfTeacherInSpecialty"
              class="input-group-text font-weight-bold p-0 pr-2 pl-2"
            >
              <font-awesome-icon icon="chalkboard-teacher" class="mr-1" />Стаж работы педагогического работника:
            </label>
          </div>
          <vue-numeric-input
            id="workExperienceOfTeacherInSpecialty"
            align="center"
            class="form-control form-control-sm m-0 p-0 w-25"
            :value="workExperienceOfTeacherInSpecialty"
            @change="setWorkExperienceOfTeacherInSpecialty"
          />
        </div>
      </div>
      <div class="form-row mb-3">
        <div class="col">
          <label for="qualification" class="font-weight-bold m-0">Квалификация:</label>
          <vue-editor id="qualification" v-model="qualification" :editorToolbar="customToolbar"></vue-editor>
        </div>
        <div class="col">
          <label
            for="nameOfTrainingDirectionAndSpecialty"
            class="font-weight-bold m-0"
          >Наименование направления подготовки и (или) специальности:</label>
          <vue-editor
            id="nameOfTrainingDirectionAndSpecialty"
            v-model="nameOfTrainingDirectionAndSpecialty"
            :editorToolbar="customToolbar"
          ></vue-editor>
        </div>
      </div>
      <div class="form-row mb-3">
        <div class="col">
          <label for="generalInformation" class="font-weight-bold m-0">Общая информация:</label>
          <vue-editor
            id="generalInformation"
            v-model="generalInformation"
            :editorToolbar="customToolbar"
          ></vue-editor>
        </div>
        <div class="col">
          <label
            for="professionalDevelopmentAndRetraining"
            class="font-weight-bold m-0"
          >Повышение квалификации и профессиональная переподготовка:</label>
          <vue-editor
            id="professionalDevelopmentAndRetraining"
            v-model="professionalDevelopmentAndRetraining"
            :editorToolbar="customToolbar"
          ></vue-editor>
        </div>
      </div>
      <div class="form-row mb-3">
        <div class="col">
          <label
            for="listOfDisciplinesTaught"
            class="font-weight-bold m-0"
          >Перечень преподаваемых дисциплин:</label>
          <vue-editor
            id="listOfDisciplinesTaught"
            v-model="listOfDisciplinesTaught"
            :editorToolbar="customToolbar"
          ></vue-editor>
        </div>
        <div class="col">
          <label for="scientificInterests" class="font-weight-bold m-0">Сфера научных интересов:</label>
          <vue-editor
            id="scientificInterests"
            v-model="scientificInterests"
            :editorToolbar="customToolbar"
          ></vue-editor>
        </div>
      </div>
      <div class="form-row mb-3">
        <div class="col">
          <label
            for="listOfSignificantPublications"
            class="font-weight-bold m-0"
          >Список значимых публикаций:</label>
          <vue-editor
            id="listOfSignificantPublications"
            v-model="listOfSignificantPublications"
            :editorToolbar="customToolbar"
          ></vue-editor>
        </div>
        <div class="col">
          <label for="publicationActivity" class="font-weight-bold m-0">Публикационная активность:</label>
          <vue-editor
            id="publicationActivity"
            v-model="publicationActivity"
            :editorToolbar="customToolbar"
          ></vue-editor>
        </div>
      </div>
      <div class="form-row">
        <div class="col text-center">
          <button class="btn btn-success btn-sm m-1" type="button" @click="saveContent">
            <font-awesome-icon icon="save" class="mr-1" />СОХРАНИТЬ
          </button>
          <button class="btn btn-warning btn-sm m-1" type="button" @click="cancel">
            <font-awesome-icon icon="door-open" class="mr-1" />ОТМЕНИТЬ
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import JobPlace from "@/components/JobPlace";
export default {
  name: "AppLecturerEntityEditor",
  components: { JobPlace },
  data() {
    return {
      photoFile: {},
      customToolbar: [
        [{ header: [false, 1, 2, 3, 4, 5, 6] }],
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        [
          { align: "left" },
          { align: "center" },
          { align: "right" },
          { align: "justify" },
        ],
        [{ color: "color-picker" }],
      ],
    };
  },
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
      "jobPlaces",
      "email",
      "eduLevel",
      "totalWorkExperience",
      "workExperienceOfTeacherInSpecialty",
    ]),
    qualification: {
      get() {
        return this.$store.getters.qualification;
      },
      set(value) {
        this.$store.dispatch("setQualification", value);
      },
    },
    nameOfTrainingDirectionAndSpecialty: {
      get() {
        return this.$store.getters.nameOfTrainingDirectionAndSpecialty;
      },
      set(value) {
        this.$store.dispatch("setNameOfTrainingDirectionAndSpecialty", value);
      },
    },
    generalInformation: {
      get() {
        return this.$store.getters.generalInformation;
      },
      set(value) {
        this.$store.dispatch("setGeneralInformation", value);
      },
    },
    professionalDevelopmentAndRetraining: {
      get() {
        return this.$store.getters.professionalDevelopmentAndRetraining;
      },
      set(value) {
        this.$store.dispatch("setProfessionalDevelopmentAndRetraining", value);
      },
    },
    listOfDisciplinesTaught: {
      get() {
        return this.$store.getters.listOfDisciplinesTaught;
      },
      set(value) {
        this.$store.dispatch("setListOfDisciplinesTaught", value);
      },
    },
    scientificInterests: {
      get() {
        return this.$store.getters.scientificInterests;
      },
      set(value) {
        this.$store.dispatch("setScientificInterests", value);
      },
    },
    listOfSignificantPublications: {
      get() {
        return this.$store.getters.listOfSignificantPublications;
      },
      set(value) {
        this.$store.dispatch("setListOfSignificantPublications", value);
      },
    },
    publicationActivity: {
      get() {
        return this.$store.getters.publicationActivity;
      },
      set(value) {
        this.$store.dispatch("setPublicationActivity", value);
      },
    },
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
      "setPhoto",
      "setAcademicDegree",
      "setAcademicStatus",
      "setPosition",
      "addJob",
      "setEmail",
      "setEduLevel",
      "setTotalWorkExperience",
      "setWorkExperienceOfTeacherInSpecialty",
      "saveContent",
      "cancel",
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
@import "~vue2-editor/dist/vue2-editor.css";

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
.vue-numeric-input {
  width: 100%;
}
.jobplace-header {
  background-color: antiquewhite;
  padding: 3px;
  margin: 0px;
  border-radius: 5px 5px 0 0;
}
</style>
