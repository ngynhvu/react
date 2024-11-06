package com.example.product.service;

import com.example.product.model.Type;
import com.example.product.repository.ITypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TypeService implements ITypeService{
    @Autowired
    ITypeRepository typeRepository;
    @Override
    public List<Type> getList() {
        return typeRepository.findAll();
    }
}
