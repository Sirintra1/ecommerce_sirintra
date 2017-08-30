import { ProductItemModel, ShopItemModel } from "../../app/app.model";

export class HomeModel {
  images: Array<String>;
  popularproducts: Array<ProductItemModel>;
  bestseller: Array<ProductItemModel>;
  lastvisit: Array<ProductItemModel>;
  popularshops: Array<ShopItemModel>;
}


