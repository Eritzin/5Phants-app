export const DATA = [
        {
        "posted_at_date": null,
        "score": 4,
        "title": "Title of the post",
        "description": "Example text of the post",
        "id_youtube": null, 
        "id_user_list": [
            75
        ],
        "product_list": [
            {
                "price": 99,
                "id_price_currency": 1,
                "url": "https://url-to-offer.com",
                "promo_code": "PPASDASD",
                "no_offer_price": 111,
                "start_date": "2020-02-09",
                "end_date": "2020-03-15",
                "is_ofer": true,
                "id_product": 17868
            }
        ],
        "image_list": [
            {
                "base64_image":
                "data:image/jpeg;base64.9j/4AAOSkZJRgABAOAAAOAB..."
            }
        ],
        "id_post_type": 3
    },

    {
        "posted_at_date": null,
        "score": 4,
        "title": "Playstation 4",
        "description": "Some description",
        "id_youtube": null, 
        "id_user_list": [
            75
        ],
        "product_list": [
            {
                "price": 99,
                "id_price_currency": 1,
                "url": "https://url-to-offer.com",
                "promo_code": "PPASDASD",
                "no_offer_price": 111,
                "start_date": "2020-02-09",
                "end_date": "2020-03-15",
                "is_ofer": true,
                "id_product": 17868
            }
        ],
        "image_list": [
            {
                "base64_image":
                "data:image/jpeg;base64.9j/4AAOSkZJRgABAOAAAOAB..."
            }
        ],
        "id_post_type": 3
    },

    {
        "posted_at_date": null,
        "score": 4,
        "title": "Xbox One X",
        "description": "Example text of the post",
        "id_youtube": null, 
        "id_user_list": [
            75
        ],
        "product_list": [
            {
                "price": 99,
                "id_price_currency": 1,
                "url": "https://url-to-offer.com",
                "promo_code": "PPASDASD",
                "no_offer_price": 111,
                "start_date": "2020-02-09",
                "end_date": "2020-03-15",
                "is_ofer": true,
                "id_product": 17868
            }
        ],
        "image_list": [
            {
                "base64_image":
                "data:image/jpeg;base64.9j/4AAOSkZJRgABAOAAAOAB..."
            }
        ],
        "id_post_type": 3
    }

]

export function renderUser(state, val) {
    return (
        state.title.toLowerCase().indexOf(val.toLowerCase()) !== -1
    );
}

export const ListOfCurrencies= [
    {
        "id":1,
        "name":"€"
    },
    {
        "id":2,
        "name":"$"
    },
    {
        "id":3,
        "name":"$MXN"
    },
    
]
