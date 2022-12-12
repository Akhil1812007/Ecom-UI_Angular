import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { product } from 'src/app/model/product.model';
import { ProductApiService } from 'src/app/product.service/product-api.service';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(private apiService:ProductApiService,private route:ActivatedRoute,private router:Router) { }
  productToBeEdited!:product
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params=>{
        const id = Number(params.get('id'));


        
      if(id){
        this.apiService.getProductById(id).subscribe(
          response=>{
            this.productToBeEdited=response;
            console.log(this.productToBeEdited);

            })
        }
      }
    )
  }

  editedChanges(){
    this.apiService.editProduct(this.productToBeEdited)
    .subscribe(
      apiresponse=>{console.log("sucessfully edited");
       alert("product edited sucessfully");

       
    }

      )
    
  }
  backToProductList(){
    this.router.navigate(['']);
  }
  
}
