import { Injectable } from '@angular/core';
import { StudentData } from '../Models/Istudent';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students: StudentData[] = [
    { id: 1, name: 'Ali Ahmed', age: 20, grade: 'A' },
    { id: 2, name: 'Sara Hassan', age: 22, grade: 'B' },
    { id: 3, name: 'Omar Khalid', age: 19, grade: 'C' },
  ];

  private nextId = 4;

  getStudents(): StudentData[] {
    return this.students;
  }

  getFilteredStudents(filterText: string): StudentData[] {
    if (!filterText.trim()) return this.students;
    return this.students.filter(s =>
      s.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }

  addStudent(student: StudentData): void {
    this.students = [...this.students, { ...student, id: this.nextId++ }];
  }
}
