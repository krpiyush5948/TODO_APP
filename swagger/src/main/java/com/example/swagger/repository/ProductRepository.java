package com.example.swagger.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.swagger.domain.Product;


@Repository
public interface ProductRepository extends CrudRepository<Product, Integer>{
}
