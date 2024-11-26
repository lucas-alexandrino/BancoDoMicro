package com.sacar.ms.sacar.controller;

import com.sacar.ms.sacar.repository.SacarRepository;
import com.sacar.ms.sacar.service.SacarService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sacar.ms.sacar.model.Conta;

@CrossOrigin(origins ="*", allowedHeaders = "*")
@RestController
@RequestMapping("/sacar")
public class SacarController{
	
	
	@Autowired
	private SacarService sacarService;
	
	ResponseEntity<String> response;
	
	@PostMapping("/{numeroConta}/{valor}")
		public ResponseEntity<String> sacar(@PathVariable int numeroConta, @PathVariable float valor) {
	        int resultado = sacarService.sacar(numeroConta, valor);
		
	       
	        switch (resultado) {
	            case 1 -> response = ResponseEntity.ok("Saque efetuado com sucesso na conta número: " + numeroConta);
	            case 2 -> response = ResponseEntity.status(HttpStatus.NOT_FOUND).body("Saldo insuficiente!");
	            case 3 -> response = ResponseEntity.badRequest().body("Conta número " + numeroConta + " não foi encontrada.");
	            default -> throw new IllegalArgumentException("Resultado inválido: " + resultado);
	        }
	        return response;
	        

	}
	
	@GetMapping("/contas")
	 public ResponseEntity<List<Conta>> listarContas() {
	     List<Conta> contas = sacarService.listarContas();
	     return ResponseEntity.ok(contas);
	 }
	
}

