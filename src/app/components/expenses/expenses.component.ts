import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Category } from 'src/app/models/category';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  @Output() modalIsSave: EventEmitter<boolean> = new EventEmitter<boolean>();
  category: Category = {
    id: 0,
    name: ''
  };

  @Input() data: Order = { 
    id: 0,
      description: '',
      price: 0,
      category: this.category,
      dateCreated: new Date(),
  };

  order: Order = {
    id: 0,
      description: '',
      price: 0,
      category: this.category,
      dateCreated: new Date(),
  };

  form: FormGroup = new FormGroup({
    description: new FormControl(''),
    price: new FormControl(''),
    category: new FormControl(''),
  });
  
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

   submitted: boolean = false;
     
  ngOnInit(): void {
    const cloneData  = Object.assign(this.order, this.data);
    debugger
    this.order =  cloneData ?? this.order;
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
      this.orderService.addOrder(this.order).subscribe(
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
