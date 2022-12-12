import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { product } from 'src/app/model/product.model';
import { ProductApiService } from 'src/app/product.service/product-api.service';

@Component({
  selector: 'app-product-details-get',
  templateUrl: './product-details-get.component.html',
  styleUrls: ['./product-details-get.component.css']
})
export class ProductDetailsGetComponent implements OnInit {

  constructor(private ProductApiService:ProductApiService, private router: Router) { }
  productList:product[]=[];
  
  
  ngOnInit(): void {
    this.ProductApiService.getAllProductsDetails()
    .subscribe(
      serviceResponse=>{
        this.productList=serviceResponse;
        console.log(this.productList);
      }
      
    )
  }
  toDeleteProduct(id:number){
    this.ProductApiService.deleteProduct(id)
    .subscribe(
      serviceResponse=>{
        console.log("deleted succsfully");
        this.router.navigate(['']);
        alert("product successfully deleted");
      }
    )
    
    
    }
    

}

