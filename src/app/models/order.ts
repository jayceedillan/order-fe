import { Category } from "./category";

export interface Order {
      id: number;
      description: string;
      price: number;
      category: Category;
      dateCreated: Date;
}
