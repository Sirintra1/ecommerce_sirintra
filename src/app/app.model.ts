export class ProductItemModel {
  name: string;
  image: Array<ImageModel>;
  price: number;
  normalprice: number;
  discount: number;
  discounttype: String;
  currency: String;
  rate: number;
  description: string;
}

export class ShopItemModel {
  name: string;
  image: string;
}

export class ImageModel {
  id: string;
  url: string;
}