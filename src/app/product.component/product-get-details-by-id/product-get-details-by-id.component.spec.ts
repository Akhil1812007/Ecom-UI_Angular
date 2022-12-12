import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGetDetailsByIdComponent } from './product-get-details-by-id.component';

describe('ProductGetDetailsByIdComponent', () => {
  let component: ProductGetDetailsByIdComponent;
  let fixture: ComponentFixture<ProductGetDetailsByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductGetDetailsByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductGetDetailsByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
