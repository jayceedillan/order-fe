import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Category } from 'src/app/models/category';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  form: FormGroup = new FormGroup({
    description: new FormControl(''),
    price: new FormControl(''),
    category: new FormControl(''),
  });
  
  @Output() modalIsSave: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(
    private orderService: OrderService,
    private formBuilder: FormBuilder,
    private store: Store<{ category: Category[] }>
  ) {
    this.form = this.formBuilder.group({
      description: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
    });
   }

   categories: Category[] = [];
   category: Category = {
     id:0,
     name:'',
   }

   submitted: boolean = false;
     
  ngOnInit(): void {
    this.store.select('category').subscribe((x) => {
      this.categories = x;
    });
  }

  isClickSaveOrClose(isSave: boolean) {
    this.modalIsSave.emit(isSave);
  }

  get myForm(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  submit() {
    this.submitted = true;
  
    if (!this.form.invalid) {
      
      const category = this.categories.find( x => x.id === Number(this.form.value.category));
      this.form.value.category = category;
      this.orderService.addOrder(this.form.value).subscribe(
        () => {
          this.modalIsSave.emit(true);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
