package com.example.product.controller;

import com.example.product.model.Type;
import com.example.product.service.ITypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/type")
@CrossOrigin(origins = "*")
public class TypeController {
    @Autowired
    ITypeService typeService;
    @GetMapping("")
    public ResponseEntity<List<Type>> getList(){
        List<Type> typeList = typeService.getList();
        if (typeList.isEmpty()){
            return new ResponseEntity<>(typeList, HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(typeList, HttpStatus.OK);
    }
}
