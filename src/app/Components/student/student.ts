import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentData } from '../../Models/Istudent';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-student',
  imports: [
    FormsModule,
    MatToolbarModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule,
    MatButtonModule, MatIconModule,
    CardModule, TableModule, TagModule, ButtonModule, InputTextModule,
  ],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  students: StudentData[] = [
    { id: 1, name: 'Ali Ahmed', age: 20, grade: 'A' },
    { id: 2, name: 'Sara Hassan', age: 22, grade: 'B' },
    { id: 3, name: 'Omar Khalid', age: 19, grade: 'C' },
  ];

  newStudent: StudentData = { id: 0, name: '', age: null, grade: '' };
  filterText = '';
  grades = ['A', 'B', 'C', 'D', 'F'];
  private nextId = 4;

  get filteredStudents(): StudentData[] {
    if (!this.filterText.trim()) return this.students;
    return this.students.filter(s =>
      s.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }

  addStudent(): void {
    if (!this.newStudent.name.trim() || !this.newStudent.age || !this.newStudent.grade) return;
    this.students = [...this.students, { ...this.newStudent, id: this.nextId++ }];
    this.newStudent = { id: 0, name: '', age: null, grade: '' };
  }


  getTagSeverity(grade: string): 'success' | 'info' | 'warn' | 'danger' {
    if (grade === 'A') return 'success';
    if (grade === 'B') return 'info';
    if (grade === 'C') return 'warn';
    return 'danger';
  }
}

