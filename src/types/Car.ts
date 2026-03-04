export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  horsepower: number;
  kilometers: number;
  imageUrl: string;
  price: number;
  status?: 'nuovo' | 'venduta' | 'arrivo'
}