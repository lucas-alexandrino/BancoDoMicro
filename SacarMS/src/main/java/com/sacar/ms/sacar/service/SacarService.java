package com.sacar.ms.sacar.service;

import com.sacar.ms.sacar.model.ContaCorrente;
import com.sacar.ms.sacar.model.ContaPoupanca;
import com.sacar.ms.sacar.model.Conta;
import com.sacar.ms.sacar.repository.SacarRepository;
import jakarta.annotation.PostConstruct;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

@Service
public class SacarService {
	
	@Autowired
    private SacarRepository sacarRepository;

    public int sacar (int numeroConta, float valor) {
    	Conta conta = sacarRepository.findByNumero(numeroConta);
    	
    	if (conta != null) {
    		boolean resultado = conta.sacar(valor);
    		if(resultado) {
    			sacarRepository.save(conta);
    			return 1;
    		}else {
    			return 2;
    		}
    	}
    	return 3;
    }
    

   
    
  //Remover metodo
    public List<Conta> listarContas() {
        return sacarRepository.findAll();
    }

   

}
