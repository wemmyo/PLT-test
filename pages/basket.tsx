import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Item, Container, Header, Menu, Divider } from "semantic-ui-react";

import BasketItem from "../src/components/BasketItem";
import {
  decreaseItem,
  increaseItem,
  removeItem,
  selectCount,
} from "../src/slices/basketSlice";
import { RootState } from "../src/store";
import { IBasket } from "../src/types";

export default function Basket() {
  const dispatch = useDispatch();
  const basket = useSelector((state: RootState) => state.basket.products);
  const totalItems = useSelector(selectCount);

  return (
    <div>
      <nav>
        <Menu stackable>
          <Menu.Item>
            <Link href="/">PRETTYLITTLETHING</Link>
          </Menu.Item>
        </Menu>
      </nav>
      <Divider hidden />
      <Container>
        <main>
          <Header as="h1">Basket</Header>
          <p>Total items: {totalItems}</p>
          <Item.Group divided>
            {basket.map((product: IBasket) => (
              <BasketItem
                key={product.id}
                product={product}
                testId="basket-card"
                onIncrease={() => dispatch(increaseItem(product))}
                onDecrease={() => dispatch(decreaseItem(product))}
                onRemove={() => dispatch(removeItem(product))}
              />
            ))}
          </Item.Group>
        </main>
      </Container>
    </div>
  );
}
