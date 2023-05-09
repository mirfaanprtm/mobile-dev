import { FlatList, StyleSheet, Text } from "react-native";
import MainContainer from "../../shared/components/MainContainer";
import { useDeps } from "../../shared/context/DependecyContext";
import { useTheme } from "../../shared/context/ThemeContext";
import React from "react";
import theme from "../../shared/constants/theme";
import { View } from "react-native";
import ProductItem from "./components/ProductItem";

const ProductList = () => {
  const theme = useTheme();
  const styles = styling(theme);
  const { productService } = useDeps();
  const [product, setProduct] = React.useState([]);
  const [isFetching, setFetching] = React.useState(false);
  const [error, setError] = React.useState("");

  const onGetAllProducts = async () => {
    setFetching(true);
    try {
      const response = await productService.getAllProduct(1);
      setProduct(response);
    } catch (e) {
      setError(e);
    } finally {
      setFetching(false);
    }
  };

  React.useEffect(() => {
    onGetAllProducts();
  }, []);

  const onDeleteItem = (id) => {
    console.log(id);
  };

  const row = [];
  let preOpenedRow;

  const refRows = (id, ref) => {
    row[id] = ref;
  };

  const closeRow = (id) => {
    if (preOpenedRow && preOpenedRow !== row[id]) {
      preOpenedRow.close();
    }

    preOpenedRow = row[id];
  };

  return (
    <MainContainer>
      <View style={styles.container}>
        <FlatList
          data={product}
          renderItem={({ item }) => <ProductItem product={item} />}
        />
      </View>
    </MainContainer>
  );
};

const styling = () =>
  StyleSheet.create({
    container: {
      margin: theme.spacing.m,
      flex: 1,
    },
  });

export default ProductList;
