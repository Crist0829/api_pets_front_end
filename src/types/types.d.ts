interface timestamp{
    created_at:string
    updated_at:string
}

export interface Pet  implements timestamp {
    id:number
    name:string
    breed:string
    type: string
    rating:number
    images:Image[]
    user:User
}

export interface Image implements timestamp {
    id:number
    name:string
    url:string
}


export interface User implements timestamp {
    id:number
    name:string
    email:string
}