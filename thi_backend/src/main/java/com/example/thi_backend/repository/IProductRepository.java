package com.example.thi_backend.repository;

import com.example.thi_backend.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IProductRepository extends JpaRepository<Product, Integer> {
  @Query(value = "select * from product where name like :searchName", nativeQuery = true)
  Page<Product> getAll(Pageable pageable,@Param("searchName") String searchName);
}
