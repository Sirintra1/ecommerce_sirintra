import { ProductItemModel } from "../../app/app.model";

export class CartModel {
    items:Array<CartItemModel>;
    totalamount:Number;
};
export class CartItemModel{
    product: ProductItemModel;
    price:Number;
    qty:Number;
    amount:Number;
};
