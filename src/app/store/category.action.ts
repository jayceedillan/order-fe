import { createAction, props } from '@ngrx/store';
import { Category } from '../models/category';

export const getCategory = createAction(
  '[Category RETRIEVED] TRANSACTION API Success',
  props<{ category: Category[] }>()
);
