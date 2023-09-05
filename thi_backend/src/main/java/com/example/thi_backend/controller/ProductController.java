package com.example.thi_backend.controller;

import com.example.thi_backend.model.Product;
import com.example.thi_backend.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class ProductController {
    @Autowired
    private IProductService productService;

    @GetMapping("/")
    public ResponseEntity<Page<Product>> getAll(@RequestParam( defaultValue = "0") int page,
                                                @RequestParam( defaultValue = "1") int size,
                                                @RequestParam( defaultValue = "",required = false) String searchName

    ) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Product> result = productService.getAll(pageable,"%"+searchName+"%");
        if (!result.isEmpty())
            return new ResponseEntity<>(result, HttpStatus.OK);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
