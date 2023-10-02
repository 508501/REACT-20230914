import { Menu } from "../Menu/component"
import { Reviews } from "../Reviews/component"


export const Restaurant = ({ restaurant }) => {
    return (
        <div>
            <h2> Restaurant "{restaurant.name}"</h2>
            <h3>Menu (specify the quantity) </h3>
            <Menu dishes={restaurant.menu} />
            <h3>Reviews</h3>
            <Reviews reviews={restaurant.reviews} />
        </div>
    );
};