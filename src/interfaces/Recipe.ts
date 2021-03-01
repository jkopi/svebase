export interface ingredient {
  quantity: string;
  ingredient: string;
}

export interface Recipe {
  id: string;
  name: string;
  image?: string;
  ingredients: Array<ingredient>
  description?: string;
  createdAt?: Date;
  uid: string;
}