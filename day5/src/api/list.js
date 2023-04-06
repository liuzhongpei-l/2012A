import Mock from 'mockjs';
Mock.mock('/api/getShopList', {
    code: 200,
    message: "success",
    "data|2-10": [
        {
            id: "@id",
            shopImg: "@image(100x100,@color)",
            name: "@ctitle(3,5)",
            shoper: "@cname",
            "price|10-100": 0,
            wrod: "@cword(10,25)"
        }
    ]
})