import { Button, Icon, Image, Item, Label } from "semantic-ui-react";
import { IBasket } from "../../types";

interface IBasketItemProps {
  product: IBasket;
  testId?: string;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

export default function BasketItem({
  product,
  testId,
  onDecrease,
  onIncrease,
  onRemove,
}: IBasketItemProps) {
  return (
    <Item data-testid={testId}>
      <Item.Image src={product.img} alt={product.name} />
      <Item.Content>
        <Item.Header>{product.name}</Item.Header>
        <Item.Meta>{product.colour}</Item.Meta>

        <Item.Extra>
          <Button onClick={onDecrease}>-</Button>
          <span>{product.quantity}</span>
          <Button onClick={onIncrease}>+</Button>
          <Button floated="right" onClick={onRemove}>
            Remove
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}
