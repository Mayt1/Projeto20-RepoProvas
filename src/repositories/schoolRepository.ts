import { prisma } from "../database/database.js";

async function findAllCategory() {
  return prisma.category.findMany();
}

async function getCategoryById(id: number) {
  return prisma.category.findUnique({
    where: { id },
  });
}

async function disciplineGetById(id: number) {
    return prisma.discipline.findUnique({
      where: { id },
    });
  }
  
  async function disciplineGetByTerm(term: number) {
    return prisma.discipline.findMany({
      where: { termId: term },
    });
  }

  async function TeacherGetById(id: number) {
    return prisma.teacher.findUnique({
      where: { id },
    });
  }
  
  async function getTeacherByDiscipline(discipline: number) {
    return prisma.teacher.findMany({
      where: { teacherDisciplines: { some: { disciplineId: discipline } } },
    });
  }

  const schoolRepository = {
    findAllCategory,
    getCategoryById,
    disciplineGetById,
    disciplineGetByTerm,
    TeacherGetById,
    getTeacherByDiscipline
  }

export default schoolRepository;