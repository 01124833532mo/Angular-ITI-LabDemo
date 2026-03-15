import { Component, signal } from '@angular/core';
import { Student } from './Components/student/student';
import { Products } from "./Components/product/product";
import { Courses } from "./Components/courses/courses";
import { Order } from "./Components/order/order";

@Component({
  selector: 'app-root',
  imports: [Student, Products, Courses, Order],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Demo');
}
