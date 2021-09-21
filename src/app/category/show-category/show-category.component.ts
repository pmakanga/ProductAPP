import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css']
})
export class ShowCategoryComponent implements OnInit {

  constructor(private service: SharedService) { }

  CategoryList!: any [];

  ModalTitle!: string;

  ActivateAddEditCategoryComp = false;

  cat: any;

  ngOnInit(): void {
    this.refreshCategoryList();
  }

  addClick = () => {
    this.cat = {
    CategoryId: 0,
    CategoryName: '',
    CategoryDescription: '',
    }
    this.ModalTitle = 'Add Product Category';
    this.ActivateAddEditCategoryComp = true;
  }

  editClick = (item: any) => {
    this.cat = item;
    this.ModalTitle = 'Edit Product Category';
    this.ActivateAddEditCategoryComp = true;
  }

  closeClick = () => {
    this.ActivateAddEditCategoryComp = false;
    this.refreshCategoryList();
  }

  refreshCategoryList = () => {
    this.service.getProductCategory().subscribe(data => {
      this.CategoryList = data;
    });
  }

}
