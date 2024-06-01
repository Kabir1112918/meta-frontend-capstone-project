import React, { useState } from 'react';
import Item from './Item';

const Menu = () => {
    const [food, setfood] = useState([
        {name:'Greek Salad',
         price:'$12.99',
         description:'mydescript one two three.',
        },
        {name:'Bruchetta',
         price:'$5.99',
         description:'mydescript four five six.',
        },
        {name:'Lemon Dessert',
         price:'$5.00',
         description:'mydescript seven eight nine',
        },
    ])

  return (
    <div className='menu'>
        <div className='week-special'>
            <h2>This weeks specials!</h2>
            <button>Online Menu</button>
        </div>

        <div className='items'>
            <Item food={food[0]}/>
            <Item food={food[1]}/>
            <Item food={food[2]}/>
        </div>
    </div>
  );
};

export default Menu;
