package com.transferir.ms.repository;

import com.transferir.ms.model.Conta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransferirRepository extends JpaRepository<Conta, Integer> {

	//public void depositar(int numero, float valor);
	
	Conta findByNumero(int numero);

}
