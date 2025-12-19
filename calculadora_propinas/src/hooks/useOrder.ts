import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]);

    const [tip, setTip] = useState(0);
    
    const addItem = (item : MenuItem) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id)
        if(itemExist) {
            //Encuentra si ya existe un item, si existe actualiza la cantidad
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ? //Si existe salta al orderItem
                {...orderItem, quantity: orderItem.quantity + 1 } :  //Si es el mismo item, aumenta la cantidad
                orderItem //Es la parte que regresa el item
            )
            setOrder(updatedOrder)
        } else {
            const newItem = {...item, quantity:1}
            setOrder([...order, newItem])
        }
        
    }

    const removeItems = (id: MenuItem['id']) => {
        setOrder(order.filter(item => item.id !== id))
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }

    return {
        order,
        tip, 
        setTip,
        addItem,
        removeItems,
        placeOrder
    }
    
}