export class ShopDetailModel {
    id: string;
    name: string;
    email: string;
    tel: string;
    map: map = new map();
    image: {
        id: string,
        url: string
    };
    coverimg: {
        id: string,
        url: string
    };
    detail: string;
    review: Array<ReviewsModel>;
    rate: number;
    address: Array<address>;
    historylog: Array<HistorylogsModel>;
    products: Array<ProductsModel>;
}

export class map {
    lat: string;
    long: string;
}

export class address {
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
////////////////to use/////////////////////
export class ShopModel {
    shop: ShopDetailModel = new ShopDetailModel();
    title: string;
}
///////////////////////////////////////////