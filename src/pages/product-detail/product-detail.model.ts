import { ProductItemModel } from "../../app/app.model";

export class ProductDetailModel {
    _id: string;
    name: string;
    detail: string;
    price: number;
    promotionprice: number; //calculate from active promotions
    images: Array<string>;
    rate: number; // calculate from reviews
    reviews: Array<ReviewsModel>; // relate of Reviews
    questions: Array<QASModel>; // relate of QA Transactions
    size: ProductDataSize = new ProductDataSize();
    shippings: Array<ShippingModel>;
    shop: ShopModel = new ShopModel();
    otherproducts: Array<ProductItemModel>; //display if not signin
    
}

export class ShopModel {
    name: string;
    detail: string;
    email: string;
    image: string;
    tel: string;
}

export class ProductDataSize {
    detail: string;
    sizedetail: Array<SizeDetailModel>;
}

export class ReviewsModel {
    comment: string;
    rate: number;
}

export class QASModel {
    question: string;
    answer: number;
}

export class PromotionsModel {
    name: string;
    desc: string;
    code: string;
}

// export class StockvalueModel {
//     in: number;
//     out: number;
// }

export class SizeDetailModel {
    name: string;
}

// export class CategoryModel {
//     name: string;
//     desc: string;
//     subcategory: Array<SubcategoryModel>;
// }

// export class SubcategoryModel {
//     name: string;
//     desc: string;
// }

// export class PaymentModel {
//     payment: string;
// }

export class ShippingModel {
    shipping: string;
}

export class RelationProductsModel {
    name: string;
    img: string;
    unitprice: number;
}
// ////////////////to use/////////////////////
// export class ProductModel {
//     product: ProductItemsModel = new ProductItemsModel();
// }
// ///////////////////////////////////////////