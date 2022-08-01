import { Request, Response } from "express";
import schoolService from "../services/schoolService.js";

export async function findManyCategory(req: Request, res: Response) {
  const categories = await schoolService.findAllCategory();
  res.send({ categories });
}

export async function getDisciplinesByTerm(req: Request, res: Response) {
    const { term } = req.params;
    const disciplines = await schoolService.disciplineGetByTerm(+term);
  
    res.send(disciplines);
}

export async function getTeacher(req: Request, res: Response) {
    const { discipline } = req.params;
  
    const teachers = await schoolService.getTeacherByDiscipline(+discipline);
    res.send(teachers);
}

