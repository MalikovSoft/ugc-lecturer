import _ from 'lodash';
import { get } from 'core-js/fn/dict';

export default {
  state: {
    fio: null,
    photo: null,
    academicDegree: null,
    academicStatus: null,
    position: null,
    jobPlaces: null,
    email: null,
    eduLevel: null,
    totalWorkExperience: null,
    workExperienceOfTeacherInSpecialty: null,
    qualification: null,
    nameOfTrainingDirectionAndSpecialty: null,
    generalInformation: null,
    professionalDevelopmentAndRetraining: null,
    listOfDisciplinesTaught: null,
    scientificInterests: null,
    listOfSignificantPublications: null,
    publicationActivity: null,
  },
  getters: {
    fio: (state) => {
      return state.fio;
    },
    photo: (state) => {
      return state.photo;
    },
    academicDegree: (state) => {
      return state.academicDegree;
    },
    academicStatus: (state) => {
      return state.academicStatus;
    },
    position: (state) => {
      return state.position;
    },
    jobPlaces: (state) => {
      return state.jobPlaces;
    },
    email: (state) => {
      return state.jobPlaces;
    },
    eduLevel: (state) => {
      return state.eduLevel;
    },
    totalWorkExperience: (state) => {
      return state.totalWorkExperience;
    },
    workExperienceOfTeacherInSpecialty: (state) => {
      return state.workExperienceOfTeacherInSpecialty;
    },
    qualification: (state) => {
      return state.qualification;
    },
    nameOfTrainingDirectionAndSpecialty: (state) => {
      return state.nameOfTrainingDirectionAndSpecialty;
    },
    generalInformation: (state) => {
      return state.generalInformation;
    },
    professionalDevelopmentAndRetraining: (state) => {
      return state.professionalDevelopmentAndRetraining;
    },
    listOfDisciplinesTaught: (state) => {
      return state.listOfDisciplinesTaught;
    },
    scientificInterests: (state) => {
      return state.scientificInterests;
    },
    listOfSignificantPublications: (state) => {
      return state.listOfSignificantPublications;
    },
    publicationActivity: (state) => {
      return state.publicationActivity;
    },
  },
  mutations: {
    updateFio(state, fio) {
      state.fio = fio;
    },
    updatePhoto(state, photo) {
      state.photo = photo;
    },
    updateAcademicDegree(state, academicDegree) {
      state.academicDegree = academicDegree;
    },
    updateAcademicStatus(state, academicStatus) {
      state.academicStatus = academicStatus;
    },
    updatePosition(state, position) {
      state.position = position;
    },
    updateJobPlaces(state, jobPlaces) {
      state.jobPlaces = jobPlaces;
    },
    addJobPlace(state, jobPlace) {
      state.jobPlaces.push(jobPlace);
    },
    updateEmail(state, email) {
      state.email = email;
    },
    updateEduLevel(state, eduLevel) {
      state.eduLevel = eduLevel;
    },
    updateTotalWorkExperience(state, totalWorkExperience) {
      state.totalWorkExperience = totalWorkExperience;
    },
    updateWorkExperienceOfTeacherInSpecialty(state, workExperienceOfTeacherInSpecialty) {
      state.workExperienceOfTeacherInSpecialty = workExperienceOfTeacherInSpecialty;
    },
    updateQualification(state, qualification) {
      state.qualification = qualification;
    },
    updateNameOfTrainingDirectionAndSpecialty(state, nameOfTrainingDirectionAndSpecialty) {
      state.nameOfTrainingDirectionAndSpecialty = nameOfTrainingDirectionAndSpecialty;
    },
    updateGeneralInformation(state, generalInformation) {
      state.generalInformation = generalInformation;
    },
    updateProfessionalDevelopmentAndRetraining(state, professionalDevelopmentAndRetraining) {
      state.professionalDevelopmentAndRetraining = professionalDevelopmentAndRetraining;
    },
    updateListOfDisciplinesTaught(state, listOfDisciplinesTaught) {
      state.listOfDisciplinesTaught = listOfDisciplinesTaught;
    },
    updateScientificInterests(state, scientificInterests) {
      state.scientificInterests = scientificInterests;
    },
    updateListOfSignificantPublications(state, listOfSignificantPublications) {
      state.listOfSignificantPublications = listOfSignificantPublications;
    },
    updatePublicationActivity(state, publicationActivity) {
      state.publicationActivity = publicationActivity;
    },
  },
  actions: {
    async fillForm({ commit, getters }, content) {
      commit('updateFio', _.get(content, 'FIO[1]', new String()));
      commit('updatePhoto', _.get(content, 'Photo[1]', new Object()));
      commit('updateAcademicDegree', _.get(content, 'AcademicDegreeID[1]', getters.degrees[0]));
      commit('updateAcademicStatus', _.get(content, 'AcademicStatusID[1]', getters.statuses[0]));
      commit('updatePosition', _.get(content, 'PositionID[1]', getters.positions[0]));
      commit('updateJobPlaces', _.get(content, 'JobPlacesIDs[1]', new Array()));
      commit('updateEmail', _.get(content, 'Email[1]', new String()));
      commit('updateEduLevel', _.get(content, 'EduLevel[1]', new String()));
      commit(
        'updateTotalWorkExperience',
        _.toNumber(_.get(content, 'TotalWorkExperience[1]', '0')),
      );
      commit(
        'updateWorkExperienceOfTeacherInSpecialty',
        _.toNumber(_.get(content, 'WorkExperienceOfTeacherInSpecialty[1]', '0')),
      );
      commit('updateQualification', _.get(content, 'Qualification[1]', new String()));
      commit(
        'updateNameOfTrainingDirectionAndSpecialty',
        content['NameOfTrainingDirectionAndSpecialty[1]'],
      );
      commit('updateGeneralInformation', _.get(content, 'GeneralInformation[1]', new String()));
      commit(
        'updateProfessionalDevelopmentAndRetraining',
        _.get(content, 'ProfessionalDevelopmentAndRetraining[1]', new String()),
      );
      commit(
        'updateListOfDisciplinesTaught',
        _.get(content, 'ListOfDisciplinesTaught[1]', new String()),
      );
      commit('updateScientificInterests', _.get(content, 'ScientificInterests[1]', new String()));
      commit(
        'updateListOfSignificantPublications',
        _.get(content, 'ListOfSignificantPublications[1]', new String()),
      );
      commit('updatePublicationActivity', _.get(content, 'PublicationActivity[1]', new String()));
    },
    setFio({ commit }, event) {
      commit('updateFio', event.target.value);
    },
    setPhoto({ commit }, photo) {
      commit('updatePhoto', photo);
    },
    setAcademicDegree({ commit }, value) {
      commit('updateAcademicDegree', value);
    },
    setAcademicStatus({ commit }, value) {
      commit('updateAcademicStatus', value);
    },
    setPosition({ commit }, value) {
      commit('updatePosition', value);
    },
  },
};
