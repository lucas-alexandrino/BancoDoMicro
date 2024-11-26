package com.depositar.ms.depositar.service;

import com.depositar.ms.depositar.model.ContaCorrente;
import com.depositar.ms.depositar.model.ContaPoupanca;
import com.depositar.ms.depositar.model.Conta;
import com.depositar.ms.depositar.repository.DepositarRepository;
import jakarta.annotation.PostConstruct;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DepositarService {
	
	@Autowired
    private DepositarRepository depositarRepository;

    public boolean depositar(int numeroConta, float valor) {
        Conta conta = depositarRepository.findByNumero(numeroConta);
        
        if (conta != null) {
            conta.depositar(valor);
            depositarRepository.save(conta);
            return true;
        }
        return false;
    }
    
  //Remover metodo
    @PostConstruct
    public void inserirContas() {

        // Cria uma Conta Corrente e a insere no banco de dados
        ContaCorrente contaCorrente = new ContaCorrente(12345, 1, "João Silva", 5000.0f, 1000.0f);
        depositarRepository.save(contaCorrente);
        
        // Cria uma Conta Poupança e a insere no banco de dados
        ContaPoupanca contaPoupanca = new ContaPoupanca(54321, 1, "Maria Souza", 2000.0f, 5);
        depositarRepository.save(contaPoupanca);
        
        System.out.println("Contas inseridas com sucesso no banco de dados.");
    }
    
    //Remover metodo
    public List<Conta> listarContas() {
        return depositarRepository.findAll();
    }

}
