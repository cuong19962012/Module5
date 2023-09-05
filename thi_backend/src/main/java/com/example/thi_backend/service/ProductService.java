package com.example.thi_backend.service;

import com.example.thi_backend.model.Product;
import com.example.thi_backend.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository productRepository;


    @Override
    public Page<Product> getAll(Pageable pageable, String searchName) {
        return productRepository.getAll(pageable, searchName);
    }
}
