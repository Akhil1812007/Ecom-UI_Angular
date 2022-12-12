import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/model/product.model';
import { ProductApiService } from 'src/app/product.service/product-api.service';
@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {
  newProduct:product={
    productId:0,
    productName:'',
    unitPrice:0,
    productQnt:0,
    productImg:'',
    categoryId:0
   
  }
  constructor(private ProductApiService:ProductApiService,private router:Router) { }

  ngOnInit(): void {
  }
  addProduct(){
    this.ProductApiService.addNewProduct(this.newProduct).subscribe(
      serviceResponse=>{
        this.newProduct=serviceResponse;
        console.log(this.newProduct);
        this.router.navigate(['']);
        alert("new product added");
      }
    )
      
      
    }
  }


