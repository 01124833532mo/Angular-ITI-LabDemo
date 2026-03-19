import { Component, signal } from '@angular/core';
import { Student } from './Components/student/student';
import { Products } from "./Components/product/product";
import { Courses } from "./Components/courses/courses";
import { Order } from "./Components/order/order";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Student, Products, Courses, Order, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Demo');
}
