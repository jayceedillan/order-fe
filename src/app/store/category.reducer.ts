import { createReducer, on } from '@ngrx/store';
import { Category } from '../models/category';
import { getCategory } from './category.action';

export const initialState: Category[] = [];

const _categoryReducer = createReducer(
  initialState,

  on(getCategory, (state, { category }) => {
    return category;
  })
);

export function categoryReducer(state: any, action: any) {
  return _categoryReducer(state, action);
}
