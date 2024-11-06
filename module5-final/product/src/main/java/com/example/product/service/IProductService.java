package com.example.product.service;

import com.example.product.model.Product;

import java.util.List;

public interface IProductService {
    List<Product> searchByName(String searchName);
    List<Product> searchByNameAndType(String name, String type);
    List<Product> listAll();
    void addNew(Product product);
    void deleteProduct(int id);
    Product findById(int id);
}
