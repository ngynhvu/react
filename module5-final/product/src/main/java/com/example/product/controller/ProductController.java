package com.example.product.controller;

import com.example.product.Dto.ProductDto;
import com.example.product.model.Product;
import com.example.product.service.IProductService;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.naming.Name;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/product")
@CrossOrigin(origins = "*")
public class ProductController {
    @Autowired
    IProductService productService;
    @GetMapping("")
    public ResponseEntity<List<Product>> getList(@RequestParam(required = false) String name){
        List<Product> productList = productService.searchByName(name);
        if (productList.isEmpty()){
            return new ResponseEntity<>(productList, HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productList, HttpStatus.OK);
    }
    @GetMapping("/search")
    public ResponseEntity<List<Product>> searchProduct(@RequestParam(required = false) String name, @RequestParam(required = false) String type){
        List<Product> productList = productService.searchByNameAndType(name, type);
        if (productList.isEmpty()){
            return new ResponseEntity<>(productList, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(productList, HttpStatus.OK);
    }
    @GetMapping("{id}")
    public ResponseEntity<Object> getProductById(@PathVariable int id){
        Product product = productService.findById(id);
        if (product == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(product, HttpStatus.OK);
    }
    @PostMapping("create")
    public ResponseEntity<Object> addProduct(@Valid @RequestBody ProductDto productDto, BindingResult bindingResult){
        if (bindingResult.hasErrors()){
            List<String> errors = bindingResult.getAllErrors().stream()
                    .map(DefaultMessageSourceResolvable::getDefaultMessage)
                    .collect(Collectors.toList());
            return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
        }
        Product product = new Product();
        BeanUtils.copyProperties(productDto, product);
        productService.addNew(product);
        return new ResponseEntity<>(product, HttpStatus.CREATED);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable int id){
        productService.deleteProduct(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Object> updateProduct(@PathVariable int id, @RequestBody Product updateProduct){
        Product preProduct = productService.findById(id);
        if (preProduct == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        productService.addNew(updateProduct);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
