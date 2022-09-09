package com.robertaribeiro.dsmeta.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.robertaribeiro.dsmeta.entities.Sale;

public interface SalesRepository extends JpaRepository<Sale,Long> {

	

}

