import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.css']
})
export class AddEditCategoryComponent implements OnInit {

  constructor(private service: SharedService) { }

  @ViewChild('closebutton') closebutton: any;

  @Input() cat: any;
  CategoryId!: number;
  CategoryName!: string;
  CategoryDescription!: string;

  CategoryList: any = [];

  ActivateAddEditCategoryComp = false

  ngOnInit(): void {
  }

  loadCategoryList = () => {
    this.service.getProductCategory().subscribe((data: any) => {
      this.CategoryList = data;

      this.CategoryId = this.cat.categoryId;
      this.CategoryName = this.cat.categoryName;
      this.CategoryDescription = this.cat.categoryDescription;
    });
  }

  addCategory = () => {
    const val = { CategoryId: this.CategoryId,
                  CategoryName: this.CategoryName,
                  CategoryDescription: this.CategoryDescription,
                };

    this.service.addProductCategory(val).subscribe(res => {
    });
  }

  updateCategory = (cat: any) => {
    cat = { CategoryId: this.CategoryId,
      CategoryName: this.CategoryName,
      CategoryDescription: this.CategoryDescription,
    };

    this.service.updateCategory(cat).subscribe(res => {
    });

  }

}
