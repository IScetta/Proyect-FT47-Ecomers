export interface IProductPreLoad{
    name:string
    description: string
    image: string
    categoryId: number
    price: number
    stock: number
}

export interface IProduct{
    id: number
    name: string
    description: string
    price: number
    stock: number
    image: string
    categoryId: number
}

export interface IUserRegister{
    email: string
    password:string
    confirmPassword:string
    name: string
    address: string
    phone: string
}

export interface IUserLogin{
    email: string
    password: string
}

export interface ICategory{
    name: string
    image: string
}

export interface IUserOrder{
    id: number
    name: string
    email: string
    address: string
    phone: string
    role: "admin" | "user"
}

export interface IOrder{
    status: "approved" | "pending" | "rejected"
    date: string
    products: IProduct[]
    id: number
}