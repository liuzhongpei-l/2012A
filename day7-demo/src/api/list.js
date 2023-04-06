import Mock from 'mockjs';


let data = Mock.mock({
    code: 200,
    message: "success",
    "data|5": [
        {
            id: "@id",
            shopName: "@ctitle(3,5)",
            "price|10-1000": 0,
            shopImg: "@image(100x100,@color)",
            num: 1,
            mis: "@cword(10,20)"
        }
    ]
})


export default data