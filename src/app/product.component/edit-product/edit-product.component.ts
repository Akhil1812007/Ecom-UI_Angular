import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/model/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor() { }
  productToBeEdited!:product
  ngOnInit(): void {
  }

}
