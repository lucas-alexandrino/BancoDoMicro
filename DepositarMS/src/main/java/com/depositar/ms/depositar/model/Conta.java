package com.depositar.ms.depositar.model;

import jakarta.persistence.*;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)  // Herança mapeada em uma única tabela
@DiscriminatorColumn(name = "tipo", discriminatorType = DiscriminatorType.INTEGER)
public abstract class Conta {

	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
    @Column(unique = true)
    private int numero;
    private int agencia;
    //private int tipo;
    private String titular;
    private float saldo;

 
    public Conta() {}
		
		public Conta(int numero, int agencia, String titular, float saldo) {
			this.numero = numero;
			this.agencia = agencia;
		//	this.tipo = tipo;
			this.titular = titular;
			this.saldo = saldo;

		}
		

		public int getNumero() {
			return numero;
		}

		public void setNumero(int numero) {
			this.numero = numero;
		}

		public int getAgencia() {
			return agencia;
		}

		public void setAgencia(int agencia) {
			this.agencia = agencia;
		}

	/*	public int getTipo() {
			return tipo;
		}

		public void setTipo(int tipo) {
			this.tipo = tipo;
		}
 */
		public String getTitular() {
			return titular;
		}

		public void setTitular(String titular) {
			this.titular = titular;
		}

		public float getSaldo() {
			return saldo;
		}

		public Long getId() {
			return id;
		}


		public void setId(Long id) {
			this.id = id;
		}


		public void setSaldo(float saldo) {
			this.saldo = saldo;
		}

		public boolean sacar(float valor) {

			if (this.getSaldo() < valor) {
				System.out.println( "\n Saldo Insuficiente!");
				return false;
			}

			this.setSaldo(this.getSaldo() - valor);
			return true;
		}

		public void depositar(float valor) {
	        if (valor > 0) {
	            this.saldo += valor;
	        } else {
	            throw new IllegalArgumentException("Valor de dep�sito inv�lido.");
	        }
	    }
		
		
		/*
		public void visualizar() {

			String tipo = "";

			switch (this.tipo) {
			case 1:
				tipo = "Conta Corrente";
				break;
			case 2:
				tipo = "Conta Poupan�a";
				break;
			}

			System.out.println("\n\n***********************************************************");
			System.out.println("Dados da Conta:");
			System.out.println("***********************************************************");
			System.out.println("Numero da Conta: " + this.numero);
			System.out.println("Ag�ncia: " + this.agencia);
			System.out.println("Tipo da Conta: " + tipo);
			System.out.println("Titular: " + this.titular);
			System.out.println("Saldo: " + this.saldo);

		}
		
		*/
		
		   public void visualizar() {
		        System.out.println("\n\n***********************************************************");
		        System.out.println("Dados da Conta:");
		        System.out.println("***********************************************************");
		        System.out.println("Numero da Conta: " + this.numero);
		        System.out.println("Agência: " + this.agencia);
		        System.out.println("Titular: " + this.titular);
		        System.out.println("Saldo: " + this.saldo);
		    }
		
	}


