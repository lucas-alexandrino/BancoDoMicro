package com.sacar.ms.sacar.repository;

import com.sacar.ms.sacar.model.Conta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SacarRepository extends JpaRepository<Conta, Integer> {

	//public void depositar(int numero, float valor);
	
	Conta findByNumero(int numero);

}
