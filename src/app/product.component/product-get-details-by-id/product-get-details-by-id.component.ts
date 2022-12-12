import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { product } from 'src/app/model/product.model';
import { ProductApiService } from 'src/app/product.service/product-api.service';

@Component({
  selector: 'app-product-get-details-by-id',
  templateUrl: './product-get-details-by-id.component.html',
  styleUrls: ['./product-get-details-by-id.component.css']
})
export class ProductGetDetailsByIdComponent implements OnInit {
 
  constructor(private route: ActivatedRoute,private ProductApiService:ProductApiService,private router:Router) { 

  }
  product!:product;
  ngOnInit(): void {
    
    this.route.paramMap.subscribe(
      params=>{
        const id = Number(params.get('id'));


        
      if(id){
        this.ProductApiService.getProductById(id).subscribe(
          response=>{
            this.product=response;
            console.log(this.product);

            })
        }
      }
    )

    
  }
  backToProducts(){
    this.router.navigate(['']);
  }
  editProduct(){
    this.router.navigate(['product','edit',this.product]);
  }

  
}
