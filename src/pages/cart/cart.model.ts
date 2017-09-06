import { ProductItemModel } from "../../app/app.model";

export class CartModel {
    _id: string;
    products: Array<CartItemModel>;
    amount: number;
};
export class CartItemModel {
    product: ProductItemModel;
    price: number;
    qty: number;
    itemamount: number;
};
