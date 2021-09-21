import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {

  constructor(private service: SharedService) { }

  @ViewChild('closebutton') closebutton: any;

  @Input() prod: any;
  ProductId!: number;
  ProductName!: string;
  ProductDescription!: string;
  Category!: string;

  CategoryList: any = [];

  ActivateAddEditProductComp = false

  ngOnInit(): void {
    this.loadProductList();
  }

  loadProductList = () => {
    this.service.getProductCategory().subscribe((data: any) => {
      this.CategoryList = data;

      this.ProductId = this.prod.productId;
      this.ProductName = this.prod.productName;
      this.ProductDescription = this.prod.productDescription;
      this.Category = this.prod.category;
    });
  }

  addProduct = () => {
    const val = { ProductId: this.ProductId,
                  ProductName: this.ProductName,
                  ProductDescription: this.ProductDescription,
                  Category: this.Category,
                };

    this.service.addProduct(val).subscribe(res => {
    });
  }

  updateProduct = (prod: any) => {
    prod = { ProductId: this.ProductId,
      ProductName: this.ProductName,
      ProductDescription: this.ProductDescription,
      Category: this.Category,
    };

    this.service.updateProduct(prod).subscribe(res => {
    });

  }

}
