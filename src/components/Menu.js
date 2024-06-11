import React, { useState } from 'react';
import Item from './Item';
import greeksalad from '../assets/greeksalad.jpg';
import bruchetta from '../assets/bruchetta.jpeg';
import lemondesert from '../assets/lemondessert.jpg';

const Menu = () => {
    const [food, setfood] = useState([
        {name:'Greek Salad',
         price:'$12.99',
         description:'mydescript one two three.',
         imageAltText: 'Greek Salad',
        },
        {name:'Bruchetta',
         price:'$5.99',
         description:'mydescript four five six.',
         imageAltText: 'Bruchetta',
        },
        {name:'Lemon Dessert',
         price:'$5.00',
         description:'mydescript seven eight nine',
         imageAltText: 'Lemon Dessert',
        },
    ])

  return (
    <div className='menu'>
        <div className='week-special'>
            <h2>This weeks specials!</h2>
            <button>Online Menu</button>
        </div>

        <div className='items'>
            <Item food={food[0]} image={greeksalad}/>
            <Item food={food[1]} image={bruchetta}/>
            <Item food={food[2]} image={lemondesert}/>
        </div>
    </div>
  );
};

export default Menu;
