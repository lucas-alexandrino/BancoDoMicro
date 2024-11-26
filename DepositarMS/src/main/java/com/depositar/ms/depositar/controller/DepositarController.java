package com.depositar.ms.depositar.controller;

import com.depositar.ms.depositar.repository.DepositarRepository;
import com.depositar.ms.depositar.model.Conta;
import com.depositar.ms.depositar.service.DepositarService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins ="*", allowedHeaders = "*")
@RestController
@RequestMapping("/deposito")
public class DepositarController {
// Caso não consiga direcionar, colocar public void main
	
	@Autowired
    private DepositarService depositarService;

	 @PostMapping("/{numeroConta}/{valor}")
	    public ResponseEntity<String> depositar(@PathVariable int numeroConta, @PathVariable float valor) {
	        boolean resultado = depositarService.depositar(numeroConta, valor);
	        
	        if (resultado) {
	            return ResponseEntity.ok("Depósito efetuado com sucesso na conta número: " + numeroConta);
	        } else {
	            return ResponseEntity.badRequest().body("Conta número " + numeroConta + " não foi encontrada.");
	        }
	    }
	 
	//Remover metodo
	 @GetMapping("/contas")
	 public ResponseEntity<List<Conta>> listarContas() {
	     List<Conta> contas = depositarService.listarContas();
	     return ResponseEntity.ok(contas);
	 }

	
}
