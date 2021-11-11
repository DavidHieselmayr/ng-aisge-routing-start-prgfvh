import { Injectable } from '@angular/core';
import * as classesData from '../../assets/classes.json';
import { Student } from '../model/student.model';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {
    // console.log(classesData.classes);
  }

  getClassNames() {
    const names: Array<string> = [];
    for (const cl of classesData.classes) {
      names.push(cl.classname);
    }
    return names;
  }

  getStudentsOfClass(className: string) {
    let i: any;
    let students: Array<Student>;
    for (i in classesData.classes) {
      if (classesData.classes[i].classname === className) {
        students = classesData.classes[i].students;
        return students;
      }
    }
    return null;
  }
}
