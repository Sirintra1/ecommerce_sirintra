export class ShopDetailModel {
    id: string;
    name: string;
    email: string;
    tel: string;
    map: map = new map();
    image: string;
    coverimg: {
        id: string,
        url: string
    };
    detail: string;
    review: Array<ReviewsModel>;
    rate: number;
    historylog: Array<HistorylogsModel>;
    products: Array<ProductsModel>;
}

export class map {
    lat: string;
    long: string;
}

export class AddressModel {
    _id: string;
    firstname: string;
    lastname: string;
    tel: string;
    address: string;
    subdistrict: string;
    district: string;
    province: string;
    postcode: string;
}

export class ReviewsModel {
    rate: number;
    comment: string;
    user: string;
}

export class HistorylogsModel {
    customerid: string;
    historydate: string;
}

export class ProductsModel {
    name: string;
    image: string;
    unitprice: number;
}