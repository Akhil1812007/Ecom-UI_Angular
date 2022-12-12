import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsGetComponent } from './product-details-get.component';

describe('ProductDetailsGetComponent', () => {
  let component: ProductDetailsGetComponent;
  let fixture: ComponentFixture<ProductDetailsGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsGetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
