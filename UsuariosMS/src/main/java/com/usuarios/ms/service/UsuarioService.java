package com.usuarios.ms.service;

import com.usuarios.ms.model.ContaCorrente;
import com.usuarios.ms.model.ContaPoupanca;
import com.usuarios.ms.model.Conta;
import com.usuarios.ms.repository.UsuarioRepository;
import jakarta.annotation.PostConstruct;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

@Service
public class UsuarioService {
	
	@Autowired
	private UsuarioRepository usuarioRepository;

	
	  //Remover metodo
    public List<Conta> listarContas() {
        return usuarioRepository.findAll();
    }
    
	// .save conta instanciada
	public boolean cadastrar(Conta conta) {
		usuarioRepository.save(conta);
		return true;
	}
	
	public Conta buscarConta (int numeroConta) {
	var conta =	usuarioRepository.findByNumero(numeroConta);

	return conta;
		
	}
	
	public boolean deletar (int numeroConta) {
		var conta = usuarioRepository.findByNumero(numeroConta);
		
		
		if (conta != null) {
			usuarioRepository.delete(conta);		
			return true;
		} else {
			return false;
		}
	}
	
	public boolean atualizar(int numeroConta, float saldo, float limite) {
	    var conta = buscarConta(numeroConta);
	    
	    if (conta != null) {
            conta.setSaldo(saldo);
           
	      
	  
	        if (conta instanceof ContaCorrente) {
	        	ContaCorrente cc = (ContaCorrente) conta;
	        	cc.setLimite(limite);
	      
	        }

	        usuarioRepository.saveAndFlush(conta);
	        return true;
	    } else {
	        return false;
	    }
	}
	
}
