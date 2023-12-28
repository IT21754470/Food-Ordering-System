import burger1 from '../assests/burger5.jpg'
import burger2 from '../assests/burger2.jpeg'
import burger3 from '../assests/burger3.jpeg'
import burger4 from '../assests/burgers4.jpeg'
import burger5 from '../assests/burger1.jpeg'

import gyros1 from '../assests/gyros2.jpg'
import gyros2 from '../assests/gyros1.jpg'
import gyros3 from '../assests/gyros3.jpeg'


import pizza1 from '../assests/pizza4.jpeg'
import pizza2 from '../assests/pizza1.jpeg'
import pizza3 from '../assests/pizza3.jpeg'


import pasta1 from '../assests/pasta2.jpeg'
import pasta2 from '../assests/pasta1.jpeg'
import pasta3 from '../assests/pasta3.jpeg'



export const foodTypes = [
    {
        name: 'burger',
        img: burger1,
        id: crypto.randomUUID()
    },
    {
        name: 'gyros',
        img: gyros1,
        id: crypto.randomUUID()
    },
    {
        name: 'pizza',
        img: pizza1,
        id: crypto.randomUUID()
    },
    {
        name: 'pasta',
        img: pasta1,
        id: crypto.randomUUID()
    },
]


// 24 foods (6 burger, 6 gyros, 6 pizza, 6 pasta)
export const foods = [
    {
        name: 'Burger 1',
        category: 'burger',
        img: burger1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Burger 2',
        category: 'burger',
        img: burger2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Burger 3',
        category: 'burger',
        img: burger3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Burger 4',
        category: 'burger',
        img: burger4,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Burger 5',
        category: 'burger',
        img: burger5,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pizza 1',
        category: 'pizza',
        img: pizza1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pizza 2',
        category: 'pizza',
        img: pizza2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pizza 3',
        category: 'pizza',
        img: pizza3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    
    {
        name: 'Gyros 1',
        category: 'gyros',
        img: gyros1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Gyros 2',
        category: 'gyros',
        img: gyros2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Gyros 3',
        category: 'gyros',
        img: gyros3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
   
    {
        name: 'Pasta 1',
        category: 'pasta',
        img: pasta1,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pasta 2',
        category: 'pasta',
        img: pasta2,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
    {
        name: 'Pasta 3',
        category: 'pasta',
        img: pasta3,
        id: crypto.randomUUID(),
        price: Math.floor(Math.random() * 20 + 7)
    },
   
]