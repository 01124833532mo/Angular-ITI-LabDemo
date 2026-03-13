import { Component ,computed,Signal,signal, WritableSignal} from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { ICategory } from '../../Models/icategory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule],
  templateUrl: 'product.html',
  styleUrl: 'product.css',
})
export class Products {
selectedCategoryId=signal(2)
showProducts=computed(()=>{
  if(this.selectedCategoryId()==-1)
    return this.products();
  let res:IProduct[]=[];
  this.products().forEach(item => {
    if(item.catId==this.selectedCategoryId()){
      res.push(item);
    }
  });
  return res;
})
products=signal([
      {
        id: 1,
        name: "Laptop",
        imgUrl: "https://fastly.picsum.photos/id/842/200/200.jpg?hmac=RW9iEgAYLKwoinQWSz_zrZHyOwmVEgqvoZTPebkRGMM",
        price: 1200,
        quantity: 10,
        catId: 1
      },
      {
        id: 2,
        name: "Mouse",
        imgUrl: "https://picsum.photos/200?random=2",
        price: 25,
        quantity: 0,
        catId: 1
      },

      {
        id: 3,
        name: "T-Shirt",
        imgUrl: "https://picsum.photos/200?random=3",
        price: 30,
        quantity: 1,
        catId: 2
      },
      {
        id: 4,
        name: "Jeans",
        imgUrl: "https://picsum.photos/200?random=4",
        price: 70,
        quantity: 25,
        catId: 2
      },

      {
        id: 5,
        name: "Coffee Mug",
        imgUrl: "https://picsum.photos/200?random=5",
        price: 12,
        quantity: 0,
        catId: 3
      },
      {
        id: 6,
        name: "Notebook",
        imgUrl: "https://picsum.photos/200?random=6",
        price: 8,
        quantity: 100,
        catId: 3
      }
    ]);
categories:ICategory[];
constructor(){

    this.categories = [
      {
        id: 1,
        name: "Electronics"
      },
      {
        id: 2,
        name: "Clothing"
      },
      {
        id: 3,
        name: "Stationery"
      }
    ];


}
totalPrice=0
add(n:number,p:number){
  this.totalPrice+=n*p;
}
}
