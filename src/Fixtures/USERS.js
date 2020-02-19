const USERS = [
        {
            "id": 21,
            "username": "JotaStudio",
            "user_experience": 0,
            "user_level": 1,
            "email": "jorgegarciaruiz97@gmail.com",
            "name": "Jota",
            "surname": "Studio",
            "nationality": null,
            "url_image": "https://d3gh3y1kcrpd2u.cloudfront.net/335613/501688335613372019.jpeg",
            "birthdate": "1997-07-28",
        },
        {
            "id": 16,
            "username": "JotafeffStudio",
            "user_experience": 0,
            "user_level": 1,
            "email": "jorgegarssssswsciaruiz97@gmail.com",
            "name": "Jota",
            "surname": "Studio",
            "nationality": null,
            "url_image": "https://d3gh3y1kcrpd2u.cloudfront.net/335613/501688335613372019.jpeg",
            "birthdate": "1997-07-28",
        },
        {
            "id": 5,
            "username": "JotassssStudio",
            "user_experience": 0,
            "user_level": 1,
            "email": "jorgegarciaffffgruiz97@gmail.com",
            "name": "Jota",
            "surname": "Studio",
            "nationality": null,
            "url_image": "https://d3gh3y1kcrpd2u.cloudfront.net/335613/501688335613372019.jpeg",
            "birthdate": "1995-07-28",
        }
    ]

    export const userMentionData = USERS.map(user => ({
        id: user.id,
        display: `@${user.username}`
      }))
  