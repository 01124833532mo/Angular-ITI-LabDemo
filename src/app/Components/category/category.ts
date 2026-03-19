import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { ICategory } from '../../Models/icategory';
import { IProduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Products } from '../product/product';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-category',
  imports: [CommonModule, FormsModule, Products, RouterLink],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category {
  @Input() categories: ICategory[] = [];
  @Input() products: IProduct[] = [];
  @Output() categoryChanged = new EventEmitter<number>();
  @Output() addToCart = new EventEmitter<number>();



  selectedCategoryId = -1;

  onCategoryChange() {
    this.categoryChanged.emit(this.selectedCategoryId);
  }




  onAddToCart(amount: number) {
    this.addToCart.emit(amount);
  }
}
