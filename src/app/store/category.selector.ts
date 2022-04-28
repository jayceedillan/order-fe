import { createSelector } from '@ngrx/store';
import { Category } from '../models/category';

import { CategoryState} from './category.state';

export const categorySelector = (state: CategoryState) => state.category;

export const getCategory = createSelector(categorySelector, (category: Category[]) => {
  return category;
});
