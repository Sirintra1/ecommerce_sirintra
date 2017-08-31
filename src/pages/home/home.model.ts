import { ProductItemModel, ShopItemModel } from "../../app/app.model";

export class HomeCategoryModel {
  categories: Array<HomeModel>;
}

export class HomeModel {
  name: string;
  images: Array<String>;
  popularproducts: Array<ProductItemModel>;
  bestseller: Array<ProductItemModel>;
  lastvisit: Array<ProductItemModel>;
  popularshops: Array<ShopItemModel>;
  prouctvoucher: Array<VoucherModel>;
  shopvoucher: Array<VoucherModel>;
}

export class VoucherModel {
  name: string;
  image: string;
}


