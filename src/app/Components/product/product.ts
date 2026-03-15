import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: 'product.html',
  styleUrl: 'product.css',
})
export class Products {
  @Input() product!: IProduct;
  @Output() addToCart = new EventEmitter<number>();

  add(quantity: number) {
    this.addToCart.emit(quantity * this.product.price);
  }
}
