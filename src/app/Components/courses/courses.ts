import { Component } from '@angular/core';
import { ICourse } from '../../Models/iCourse ';
import { ICategory } from '../../Models/icategory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContainsFilterPipe } from '../../contains-filter.pipe';

@Component({
  selector: 'app-courses',
  imports: [CommonModule, FormsModule, ContainsFilterPipe],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {

  selectedCategoryId: number = -1;
  courseSearchText = '';

  Categories: ICategory[] = [
    { id: 1, name: 'software' },
    { id: 2, name: 'engineering' },
    { id: 3, name: 'Programming' },
    { id: 4, name: 'Design' },
    { id: 5, name: 'Business' },
  ];
Courses : ICourse [] = [
  {
    id:1,
    title:'Angular',
    instactor:'Eng. Amr',
    price:5000,
    seats:1,
    imgUrl:'https://fastly.picsum.photos/id/842/200/200.jpg?hmac=RW9iEgAYLKwoinQWSz_zrZHyOwmVEgqvoZTPebkRGMM',
    catId:5,
        categoryName:'Business'

  },
   {
    id:2,
    title:'cs',
    instactor:'Eng. Amr',
    price:2002,
    seats:4,
    imgUrl:'https://fastly.picsum.photos/id/842/200/200.jpg?hmac=RW9iEgAYLKwoinQWSz_zrZHyOwmVEgqvoZTPebkRGMM',
    catId:4,
        categoryName:'Design '

  }, {
    id:3,
    title:'full-stack',
    instactor:'Eng. Amr',
    price:5000,
    seats:20,
    imgUrl:'https://fastly.picsum.photos/id/842/200/200.jpg?hmac=RW9iEgAYLKwoinQWSz_zrZHyOwmVEgqvoZTPebkRGMM',
    catId:1,
    categoryName:'software'
  }, {
    id:4,
    title:'modern-technology',
    instactor:'Eng. Amr',
    price:5000,
    seats:20,
    imgUrl:'https://fastly.picsum.photos/id/842/200/200.jpg?hmac=RW9iEgAYLKwoinQWSz_zrZHyOwmVEgqvoZTPebkRGMM',
    catId:2,
    categoryName:'engineering'
  }, {
    id:5,
    title:'Angular',
    instactor:'Eng. Amr',
    price:3000,
    seats:0,
    imgUrl:'https://fastly.picsum.photos/id/842/200/200.jpg?hmac=RW9iEgAYLKwoinQWSz_zrZHyOwmVEgqvoZTPebkRGMM',
    catId:3,
    categoryName:'Programming'
  }]

decriceseSeats(item:ICourse){
  if(item.seats>0){
    item.seats--;
  }
  else{
    alert('no seats available');
  }
}



}
