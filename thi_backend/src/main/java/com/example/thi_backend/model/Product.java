package com.example.thi_backend.model;

import javax.persistence.*;
import java.sql.Date;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String productCode;
    private String name;
    private Date inDate;
    private Integer quantity;
    @ManyToOne
    @JoinColumn(referencedColumnName = "id")
    private Type type;

    public Product() {
    }

    public Product(Integer id, String productCode, String name, Date inDate, Integer quantity, Type type) {
        this.id = id;
        this.productCode = productCode;
        this.name = name;
        this.inDate = inDate;
        this.quantity = quantity;
        this.type = type;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getProductCode() {
        return productCode;
    }

    public void setProductCode(String productCode) {
        this.productCode = productCode;
    }

    public Date getInDate() {
        return inDate;
    }

    public void setInDate(Date inDate) {
        this.inDate = inDate;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
