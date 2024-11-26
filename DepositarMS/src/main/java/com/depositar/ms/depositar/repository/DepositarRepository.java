package com.depositar.ms.depositar.repository;

import com.depositar.ms.depositar.model.Conta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepositarRepository extends JpaRepository<Conta, Integer> {

	//public void depositar(int numero, float valor);
	
	Conta findByNumero(int numero);

}
