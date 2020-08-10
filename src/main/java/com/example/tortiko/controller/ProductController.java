package com.example.tortiko.controller;

import com.example.tortiko.model.Product;
import com.example.tortiko.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductController {

    private final ProductRepository productRepository;

    @Autowired
    public ProductController(ProductRepository productRepository){
        this.productRepository = productRepository;
    }
    @RequestMapping(value = "/get-products", method = RequestMethod.GET)
    public List<Product> productList(){
        return productRepository.findAll();
    }
    @RequestMapping(value = "/upload-product", method = RequestMethod.POST)
    public Product createProduct(@RequestBody Product product)  {
        return productRepository.save(product);
    }
}
