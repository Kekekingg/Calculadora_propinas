export type MenuItem = {
    id: number,
    name: string,
    price: number
}

// Extiende el tipo MenuItem agregando la propiedad quantity, es como si copiara todas las propiedades de MenuItem y le agregara quantity
export type OrderItem = MenuItem & {
    quantity: number
}