export interface IProduct
{
  id:number;
  title:string;
  price:number;
  description:string;
  category:string;
  image:string,
  //images:Array<string>;
  rating:IRating;
}

export interface IRating{
  rate:number;
  count:number;
}


