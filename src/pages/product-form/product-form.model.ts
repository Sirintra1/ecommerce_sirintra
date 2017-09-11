import { ReviewsModel, QuestionModel } from "../../app/app.model";
import { ProductDataSize, ShopModel, ShippingMethodModel } from "../product-detail/product-detail.model";

export class ProductModel {
    _id: string;
    name: string;
    detail: string;
    price: number;
    promotionprice: number; //calculate from active promotions
    percentofdiscount: number; //calculate from active promotions
    currency: string;
    images: Array<string> = [];
    reviews: Array<ReviewsModel>; // relate of Reviews
    questions: Array<QuestionModel>; // relate of QA Transactions
    size: ProductDataSize = new ProductDataSize();
    shippings: Array<ShippingMethodModel>;
    shop: ShopModel = new ShopModel();
}