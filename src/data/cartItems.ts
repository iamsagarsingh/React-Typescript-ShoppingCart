export interface cartTypes {
    id:number,
    productName:string,
    productPrice:number,
    productImg:string
}


const cartItems:cartTypes[]= [
    {
        id:1,
        productName:"Keyboard",
        productPrice:1100,
        productImg:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id:2,
        productName:"GIGABYTE GeForce RTX 3060 Eagle OC",
        productPrice:14145,
        productImg:"https://images.unsplash.com/photo-1587134160474-cd3c9a60a34a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id:3,
        productName:"Mouse",
        productPrice:3100,
        productImg:"https://images.unsplash.com/photo-1594008671689-8d8b9480cae8?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id:4,
        productName:"Stylus",
        productPrice:4500,
        productImg:"https://plus.unsplash.com/premium_photo-1661783282132-96ca2c713c2a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id:5,
        productName:"Controller",
        productPrice:6000,
        productImg:"https://images.unsplash.com/photo-1592840496694-26d035b52b48?q=80&w=525&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id:6,
        productName:"Mic",
        productPrice:11100,
        productImg:"https://plus.unsplash.com/premium_photo-1668390872454-181a08165472?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id:7,
        productName:"MousePag",
        productPrice:600,
        productImg:"https://images.unsplash.com/photo-1616071358409-ef30a44a90bb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
]

export {cartItems}