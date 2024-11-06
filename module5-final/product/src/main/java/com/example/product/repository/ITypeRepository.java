package com.example.product.repository;

import com.example.product.model.Type;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ITypeRepository extends JpaRepository<Type, Integer> {
}
