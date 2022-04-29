import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { HttpClientModule } from '@angular/common/http';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { ButtonComponent } from './components/button/button.component';
import { StoreModule } from '@ngrx/store';
import { categoryReducer } from './store/category.reducer';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    ExpensesComponent,
    ButtonComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ category: categoryReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
