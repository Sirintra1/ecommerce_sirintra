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

export class ReviewsModel {
  _id: string;
  topic: string;
  comment: string;
  rate: number;
  created: Date;
  user: any;
}

export class QuestionModel {
  _id: string;
  question: string;
  answer: number;
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