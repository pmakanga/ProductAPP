import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  constructor(private service: SharedService,) { }

    ProductList!: any [];

    ModalTitle!: string;

    ActivateAddEditProductComp = false;

    prod: any;

  ngOnInit(): void {
    this.refreshProductList();
  }

  addClick = () => {
    this.prod = {
    ProductId: 0,
    ProductName: '',
    ProductDescription: '',
    Category: '',
    }
    this.ModalTitle = 'Add Product';
    this.ActivateAddEditProductComp = true;
  }

  editClick = (item: any) => {
    this.prod = item;
    this.ModalTitle = 'Edit Product';
    this.ActivateAddEditProductComp = true;
  }

  deleteClick = (item: any) => {
    if (confirm('Are you sure??')) {
      this.service.deleteProduct(item.id).subscribe(data => {
        this.refreshProductList();
      });
    }
  }

  closeClick = () => {
    this.ActivateAddEditProductComp = false;
    this.refreshProductList();
  }

  refreshProductList = () => {
    this.service.getProducts().subscribe(data => {
      this.ProductList = data;
      console.log(data);
    });
  }

}
