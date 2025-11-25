import { Logs } from 'lucide-react';
import { Coffee   } from 'lucide-react';
import { Soup   } from 'lucide-react';
import { Utensils  } from 'lucide-react';
import { UtensilsCrossed   } from 'lucide-react';
import { Pizza   } from 'lucide-react';
import { Hamburger    } from 'lucide-react';

export const categoryMenu = [
    {
        id : 1,
        name : 'All',
        icon : Logs,
        food_category: "All"
    },
    {
        id : 2,
        name : 'BreakFast',
        icon : Coffee,
        food_category: "breakfast"
    },
    {
        id : 3,
        name : 'Soup',
        icon : Soup,
        food_category: "soups"
    },
    {
        id : 4,
        name : 'Pasta',
        icon : Utensils,
        food_category: "pasta"
    },
    {
        id : 5,
        name : 'Main Course',
        icon : UtensilsCrossed,
        food_category: "main_course"
    },
    {
        id : 6,
        name : 'Pizza',
        icon : Pizza,
        food_category: "pizza"
    },
    {
        id : 7,
        name : 'Burger',
        icon : Hamburger,
        food_category: "burger"
    }
] 