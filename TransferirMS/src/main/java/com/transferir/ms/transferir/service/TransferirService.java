package com.transferir.ms.transferir.service;

import com.transferir.ms.transferir.model.ContaCorrente;
import com.transferir.ms.transferir.model.ContaPoupanca;
import com.transferir.ms.transferir.model.Conta;
import com.transferir.ms.transferir.repository.TransferirRepository;
import jakarta.annotation.PostConstruct;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

@Service
public class TransferirService {
	
	@Autowired
    private TransferirRepository transferirRepository;
    
    
 // void
    public boolean transferir (int numeroOrigem, int numeroDestino, float valor) {
    	Conta contaOrigem = transferirRepository.findByNumero(numeroOrigem);
    	Conta contaDestino = transferirRepository.findByNumero(numeroDestino);
    	
    	if(contaOrigem != null && contaDestino != null) {
    		boolean resultadoSaque = contaOrigem.sacar(valor);
    		boolean resultadoDeposito = contaDestino.depositar(valor);
    		if (resultadoSaque && resultadoDeposito) {
    			transferirRepository.save(contaOrigem);
    			transferirRepository.save(contaDestino);
    			return true;
    		}
    		return false;
    	}
		return false;
    }
    
    public boolean buscaConta (int numeroOrigem, int numeroDestino) {
    	Conta contaOrigem = transferirRepository.findByNumero(numeroOrigem);
    	Conta contaDestino = transferirRepository.findByNumero(numeroDestino);
    	
    	if(contaOrigem != null & contaDestino != null) {
    		return true;
    	}
    	return false;
	
    }
    
    
    
   
    
  //Remover metodo
    public List<Conta> listarContas() {
        return transferirRepository.findAll();
    }

   

}
