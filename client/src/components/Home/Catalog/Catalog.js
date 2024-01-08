import { useContext } from "react";

import { CatalogItem } from "./CatalogItem/CatalogItem";
import { Pagination } from 'react-bootstrap';

import {ProductContext} from '../../../contexts/ProductContext';

export const Catalog = ({
    products,
    pageTitle,
}) => {

    const {currentPage,totalPages, setCurrentPage } = useContext(ProductContext)

    const handlePaginationClick = (page) => {
        if (page >= 1 && page <= totalPages && page !== currentPage) {
          setCurrentPage(page);
        }
      };
    
      const renderPaginationItems = () => {
        const items = [];
      
        items.push(
          <Pagination.First
            key="first"
            onClick={() => handlePaginationClick(1)}
          />
        );
      
        if (currentPage > 1) {
          items.push(
            <Pagination.Prev
              key="prev"
              onClick={() => handlePaginationClick(currentPage - 1)}
            />
          );
        }
      
        for (let page = Math.max(1, currentPage - 2); page <= Math.min(currentPage + 2, totalPages); page++) {
          items.push(
            <Pagination.Item
              key={page}
              active={currentPage === page}
              onClick={() => handlePaginationClick(page)}
            >
              {page}
            </Pagination.Item>
          );
        }
      
        if (currentPage < totalPages) {
          items.push(
            <Pagination.Next
              key="next"
              onClick={() => handlePaginationClick(currentPage + 1)}
            />
          );
        }
      
        items.push(
          <Pagination.Last
            key="last"
            onClick={() => handlePaginationClick(totalPages)}
          />
        );
      
        return items;
      };
     
    return (
        <section className="catalog-page">
            <div className="container">
                <h1>{pageTitle}</h1>
                <div className="container-catalog-wrapper">

                    {products && Array.isArray(products) && products.length > 0? (
                    products.map((x) => <CatalogItem key={x._id} {...x} />)) 
                    : 
                    (<h3 className="no-articles">No products yet</h3>)}
                </div>
                <div className="pagination-wrapper">
                <Pagination>{renderPaginationItems()}</Pagination>
                </div>
            </div>
        </section>
    );
};