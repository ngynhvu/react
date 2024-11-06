package com.example.product.service;

import com.example.product.model.Product;
import com.example.product.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProductService implements IProductService{
    @Autowired
    IProductRepository productRepository;

    @Override
    public List<Product> searchByName(String searchName) {
        return productRepository.findProductsByNameContaining(searchName);
    }

    @Override
    public List<Product> searchByNameAndType(String name, String type) {
        return productRepository.findProductsByNameContainingAndType_Name(name, type);
    }

    @Override
    public List<Product> listAll() {
        return productRepository.findAll();
    }

    @Override
    public void addNew(Product product) {
        productRepository.save(product);
    }

    @Override
    public void deleteProduct(int id) {
        productRepository.deleteById(id);
    }

    @Override
    public Product findById(int id) {
        return productRepository.findById(id).orElse(null);
    }
}
