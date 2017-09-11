export class ProductItemModel {
  _id: string;
  name: string;
  image: string;
  price: number;
  normalprice: number;
  discount: number;
  discounttype: String;
  currency: String;
  rate: number;
  description: string;
}

export class ShopItemModel {
  _id: string;
  name: string;
  image: string;
}

// export class ImageModel {
//   id: string;
//   url: string;
// }