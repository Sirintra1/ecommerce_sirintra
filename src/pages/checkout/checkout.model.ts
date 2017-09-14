import { ProductItemModel } from "../../app/app.model";

export class CheckoutModel { // Order Schema Model
    _id: string;
    items: Array<CheckoutItemModel>;
    amount: number;
    discount: number;
    totalamount: number;
    deliveryprice: number;
    shipping: AddressModel = new AddressModel();
    payment: PaymentModel = new PaymentModel();
};

export class CheckoutItemModel { //items form cart and create deliveryprice , delivery
    product: ProductItemModel;
    qty: number;
    amount: number;
    discount: number;
    totalamount: number;
    deliveryprice: number;
    delivery: DeliveryModel = new DeliveryModel();
};

export class DeliveryModel { // user select form product shipping
    detail: string;
    name: string;
    price: number;
}

export class AddressListModel { // Address list bind address by user
    address: Array<AddressModel>;
}

export class AddressModel { // Address Schema
    _id: string;
    address: string;
    subdistrict: string;
    district: string;
    province: string;
    postcode: string;
    firstname: string;
    lastname: string;
}

export class PaymentModel { // Payment
    paymenttype: string;
    creditno: string;
    creditname: string;
    expdate: string;
    creditcvc: string;
    counterservice: string;
}

export class PaymentMasterModel { // Payment master
    payment: Array<PaymentItemModel>;
    counterservice: Array<PaymentItemModel>;
}

export class PaymentItemModel { // Payment master
    name: string;
    image: string;
}