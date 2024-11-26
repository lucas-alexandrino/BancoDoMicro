package com.usuarios.ms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.usuarios.ms.model.Conta;
import com.usuarios.ms.model.ContaCorrente;
import com.usuarios.ms.repository.UsuarioRepository;
import com.usuarios.ms.service.UsuarioService;

import com.usuarios.ms.model.ContaPoupanca;

@CrossOrigin(origins ="*", allowedHeaders = "*")
@RestController
@RequestMapping("/usuarios")
public class UsuarioController {
	
	@Autowired
	private UsuarioService usuarioService;
	
	ResponseEntity<String> response;
	ResponseEntity<Object> conta;

	// criar metodo para gerar numero para a conta
	// Fazer validação de atributos nulos e > ou < 0 no Front-end
	@PostMapping("/cadastrarcc/{numero}/{numeroAgencia}/{nomeTitular}/{saldo}/{limite}")
	public ResponseEntity<String> cadastrarContaCorrente (@PathVariable int numero, @PathVariable int numeroAgencia,@PathVariable String nomeTitular, @PathVariable float saldo, @PathVariable float limite) {
			boolean resposta = usuarioService.cadastrar(new ContaCorrente(numero, numeroAgencia, nomeTitular, saldo, limite));
			
			if (resposta) {
				System.out.println("\n A conta número: " + numero + "Foi criada com sucesso!");
				response = ResponseEntity.ok("\n A conta número: " + numero + "Foi criada com sucesso!");
			} else {
				System.out.println("Erro!");
				response =ResponseEntity.badRequest().body("Erro!");
			}
			
			return response;
			
	}
		
		
	@PostMapping("/cadastrarcp/{numero}/{numeroAgencia}/{nomeTitular}/{saldo}/{aniversario}")
	public ResponseEntity<String> cadastrarContaPoupanca (@PathVariable int numero, @PathVariable int numeroAgencia, @PathVariable String nomeTitular, @PathVariable float saldo, @PathVariable int aniversario) {
		boolean resposta = usuarioService.cadastrar(new ContaPoupanca(numero,numeroAgencia,nomeTitular,saldo,aniversario));
		
		if (resposta) {
			System.out.println("\n A conta número: " + numero + "Foi criada com sucesso!");
			response = ResponseEntity.ok("\n A conta número: " + numero + "Foi criada com sucesso!");
		} else {
			System.out.println("Erro!");
			response =ResponseEntity.badRequest().body("Erro!");
		}
		
		return response;

	}
	
	@PostMapping("/buscaconta/{numeroConta}")
	public ResponseEntity<Object> procurarPorNumero (@PathVariable int numeroConta) {
		Conta resposta = usuarioService.buscarConta(numeroConta);
		
		if(resposta != null) {
			return conta = ResponseEntity.ok(resposta.visualizar());
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Conta de origem e/ou destino não encontradas!");
		}
	
	}
	
	
	@PostMapping("/atualizar/{numeroConta}/{saldo}/{limite}")
		public ResponseEntity<String> atualizar (@PathVariable int numeroConta,@PathVariable float saldo, @PathVariable float limite) {
		boolean resposta = usuarioService.atualizar(numeroConta, saldo, limite);
		
		if(resposta) {
			return ResponseEntity.ok("Atualização feita!");
		}else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Conta de origem não encontrada!");
		}
	}
	

	@PostMapping("/deletar/{numeroConta}")
	public ResponseEntity<String> deletar(@PathVariable int numeroConta) {
		boolean resposta = usuarioService.deletar(numeroConta);
		
		if (resposta) {
			response = ResponseEntity.ok("\n A conta número: " + numeroConta + "Foi removida!");
		} else {
			response = ResponseEntity.status(HttpStatus.NOT_FOUND).body("Conta não localizada!");
		}
		
		return response;
	}
	

	// apagar metodo
	@GetMapping("/contas")
	 public ResponseEntity<List<Conta>> listarContas() {
	     List<Conta> contas = usuarioService.listarContas();
	     return ResponseEntity.ok(contas);
	 }
	
	
}
