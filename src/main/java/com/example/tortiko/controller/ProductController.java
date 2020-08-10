package com.example.tortiko.controller;

import com.example.tortiko.model.Product;
import com.example.tortiko.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Random;

@RestController
public class ProductController {

    private final ProductRepository productRepository;

    @Autowired
    public ProductController(ProductRepository productRepository){
        this.productRepository = productRepository;
    }
    @GetMapping("{id}")
    public Product getOne(@PathVariable("id") Product product){
        return product;
    }
    @RequestMapping(value = "/get-products", method = RequestMethod.GET)
    public List<Product> productList(){
        return productRepository.findAll();
    }
    @RequestMapping(value = "/upload-product", method = RequestMethod.POST)
    public Product createProduct(@RequestBody Product product)  {
        product.setId(new Random().nextLong());
        return productRepository.save(product);
    }
}
