import React, { useEffect, useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { productServiceFactory } from "../services/productService";
import { getSession } from "../session/session";

const DataProvider = ({ children }) => {
    const { onSetProducts,setTotalPages,currentPage } = useContext(ProductContext);

    useEffect(() => {
        const productService = productServiceFactory(getSession()?.accessToken);

            const fetchData = async () => {
      try {
        const result = await productService.getAll(currentPage);
        onSetProducts(result.products);
        setTotalPages(result.totalPages);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [currentPage]);

    return <>{children}</>;
};

export default DataProvider;
