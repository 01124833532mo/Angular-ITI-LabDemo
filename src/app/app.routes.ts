import { Routes } from '@angular/router';
import { Student } from './Components/student/student';
import { Category } from './Components/category/category';
import { NotFound } from './Components/not-found/not-found';
import { Products } from './Components/product/product';

export const routes: Routes = [
  {path: '', redirectTo: 'student', pathMatch: 'full'},
  {path:'student',component:Student},
  {path:'category', component:Category,children:[
    {path:'productslist', component:Products},
    {path: '**', component: NotFound }
  ] },
  {path:'**', component:NotFound}

];
