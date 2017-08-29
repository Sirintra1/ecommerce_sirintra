export class HomeModel {
    images: Array<String>;
    popularproducts: Array<Popular>;
    bestseller: Array<Bestseller>;
    lastvisit: Array<Lastvisit>;
    popularshops: Array<ShopItemModel>;
  }
  
  export class Lastvisit {
    name: String;
    image: String;
    unitprice: Number;
  }
  export class Bestseller {
    name: String;
    image: String;
    unitprice: Number;
  }
  export class Popular {
    name: String;
    image: String;
    unitprice: Number;
  }
  export class ShopItemModel {
    name: String;
    image: String;
  }
  