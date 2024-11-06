package com.example.product.repository;

import com.example.product.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IProductRepository extends JpaRepository<Product, Integer> {
    List<Product> findProductsByNameContaining(String searchName);
    List<Product> findProductsByNameContainingAndType_Name(String name, String type);
}
