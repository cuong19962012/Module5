package com.example.thi_backend.service;

import com.example.thi_backend.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IProductService {
    Page<Product> getAll(Pageable pageable,String searchName);

}
