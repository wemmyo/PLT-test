import { useDispatch } from "react-redux";
import { Grid } from "semantic-ui-react";
import { increaseItem } from "../../slices/basketSlice";
import { IProduct } from "../../types";
import Product from "../Product/Product";

interface IProductListProps {
  data: IProduct[];
}

export default function ProductList({ data }: IProductListProps) {
  const dispatch = useDispatch();
  return (
    <Grid doubling columns={3}>
      {data.map((product: IProduct) => (
        <Grid.Column key={product.id}>
          <Product
            data={product}
            onAddToBasket={() => dispatch(increaseItem(product))}
          />
        </Grid.Column>
      ))}
    </Grid>
  );
}
