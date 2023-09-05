package com.example.thi_backend.repository;

import com.example.thi_backend.model.Type;
import org.springframework.data.jpa.repository.JpaRepository;
public interface ITypeRepository extends JpaRepository<Type,Integer> {

}
