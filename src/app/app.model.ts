export class ProductItemModel {
  name: String;
  image: Array<ImageModel>;
  price: Number;
  normalprice: Number;
  discount: Number;
  discounttype: String;
  currency: String;
  rate: Number;
  description: string;
}

export class ShopItemModel {
  name: String;
  image: String;
}

export class ImageModel {
  id: string;
  url: string;
}