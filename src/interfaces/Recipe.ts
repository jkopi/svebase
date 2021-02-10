interface ingredient {
  quantity: number;
  volume: string;
  ingredient: string;
}

export interface Recipe {
  name: string;
  ingredients: Array<ingredient>
  description?: string;
  createdAt?: Date;
  uid: string;
}