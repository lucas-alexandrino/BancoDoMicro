package com.transferir.ms.controller;

import com.transferir.ms.repository.TransferirRepository;
import com.transferir.ms.service.TransferirService;

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

import com.transferir.ms.model.Conta;

@CrossOrigin(origins ="*", allowedHeaders = "*")
@RestController
@RequestMapping("/transferir")
public class TransferirController{
	
	// O metodo .sacar na linha 14 � o unico motivo para ter todas as models
	
	@Autowired
	private TransferirService transferirService;
	
	ResponseEntity<String> response;
	
	
	@PostMapping("/{numeroOrigem}/{numeroDestino}/{valor}")
	public ResponseEntity<String> transferir (@PathVariable int numeroOrigem, @PathVariable int numeroDestino, @PathVariable float valor) {
		boolean buscaContas = transferirService.buscaConta(numeroOrigem, numeroDestino);
		
		System.out.println("numero que saiu:"+buscaContas);
		
		if (buscaContas) {
			boolean resultado = transferirService.transferir(numeroOrigem, numeroDestino, valor);
			if (resultado) {
				response =ResponseEntity.ok("A transferência foi efetuada com sucesso!");
			} else{
				response =ResponseEntity.badRequest().body("Valor incorreto!");
			}
		
		} else {
		response = ResponseEntity.status(HttpStatus.NOT_FOUND).body("Conta de origem e/ou destino não encontradas!");
		}
	
		return response;
	}
	
	
	@GetMapping("/contas")
	 public ResponseEntity<List<Conta>> listarContas() {
	     List<Conta> contas = transferirService.listarContas();
	     return ResponseEntity.ok(contas);
	 }
	
	
	
	
}




	
	/*
	
	var buscaConta = buscarNaCollection(numero);

	if (buscaConta != null) {
		if (listaContas.get(listaContas.indexOf(buscaConta)).sacar(valor) == true)
			;
		System.out.println("\n O Saque na conta n�mero: " + numero + " foi efetuado com sucesso!");
	} else {
		System.out.println("\n A conta n�mero: " + numero + " n�o foi encontrada!");
	}
	
	*/ 
