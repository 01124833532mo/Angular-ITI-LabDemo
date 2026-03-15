import { Component } from '@angular/core';
import { ICategory } from '../../Models/icategory';
import { IProduct } from '../../Models/iproduct';
import { Category } from '../category/category';

@Component({
  selector: 'app-order',
  imports: [Category],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order {
  totalPrice = 0;
  selectedCategoryId = -1;

  categories: ICategory[] = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Clothing" },
    { id: 3, name: "Stationery" }
  ];

  products: IProduct[] = [
    { id: 1, name: "Laptop", imgUrl: "https://fastly.picsum.photos/id/842/200/200.jpg?hmac=RW9iEgAYLKwoinQWSz_zrZHyOwmVEgqvoZTPebkRGMM", price: 1200, quantity: 10, catId: 1 },
    { id: 2, name: "Mouse", imgUrl: "https://picsum.photos/200?random=2", price: 25, quantity: 0, catId: 1 },
    { id: 3, name: "T-Shirt", imgUrl: "https://picsum.photos/200?random=3", price: 30, quantity: 1, catId: 2 },
    { id: 4, name: "Jeans", imgUrl: "https://picsum.photos/200?random=4", price: 70, quantity: 25, catId: 2 },
    { id: 5, name: "Coffee Mug", imgUrl: "https://picsum.photos/200?random=5", price: 12, quantity: 0, catId: 3 },
    { id: 6, name: "Notebook", imgUrl: "https://picsum.photos/200?random=6", price: 8, quantity: 100, catId: 3 }
  ];

  get filteredProducts(): IProduct[] {
    if (this.selectedCategoryId == -1) return this.products;
    return this.products.filter(p => p.catId == this.selectedCategoryId);
  }

  onCategoryChanged(catId: number) {
    this.selectedCategoryId = catId;
  }

  onAddToCart(amount: number) {
    this.totalPrice += amount;
  }
}
