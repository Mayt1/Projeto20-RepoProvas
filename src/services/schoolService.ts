import schoolRepository from "../repositories/schoolRepository.js";

async function findAllCategory() {
  return schoolRepository.findAllCategory();
}

async function getCategoryById(id: number) {
  return schoolRepository.getCategoryById(id);
}

async function disciplineGetById(id: number) {
  return schoolRepository.disciplineGetById(id);
}
  
async function disciplineGetByTerm(term: number) {
  return schoolRepository.disciplineGetByTerm(term);
}

async function TeacherGetById(id: number) {
  return schoolRepository.TeacherGetById(id);
}
  
async function getTeacherByDiscipline(discipline: number) {
  return schoolRepository.getTeacherByDiscipline(discipline);
}

const schoolService = {
  findAllCategory,
  getCategoryById,
  disciplineGetById,
  disciplineGetByTerm,
  TeacherGetById,
  getTeacherByDiscipline
};

 
export default schoolService;