import { Card, Icon, Image, Button } from "semantic-ui-react";
import { IProduct } from "../../types";

interface IProductProps {
  data: IProduct;
  onAddToBasket: () => void;
}

export default function Product({ data, onAddToBasket }: IProductProps) {
  return (
    <Card>
      <Image src={data.img} alt={data.name} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{data.name}</Card.Header>
        <Card.Meta>{data.colour}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="pound sign" />
          {data.price}
        </a>
      </Card.Content>
      <Card.Content extra>
        <Button onClick={onAddToBasket}>Add to basket</Button>
      </Card.Content>
    </Card>
  );
}
