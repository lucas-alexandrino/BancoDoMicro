package com.usuarios.ms.model;

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

		public boolean depositar(float valor) {
	        if (valor > 0) {
	            this.saldo += valor;
	            return true;
	        } else {
	            return false;
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
		
		public String visualizar() {
			
		    StringBuilder sb = new StringBuilder();
		    sb.append("\n\n***********************************************************\n");
		    sb.append("Dados da Conta:\n");
		    sb.append("***********************************************************\n");
		    sb.append("Numero da Conta: ").append(this.numero).append("\n");
		    sb.append("Agência: ").append(this.agencia).append("\n");
		    sb.append("Titular: ").append(this.titular).append("\n");
		    sb.append("Saldo: ").append(this.saldo).append("\n");
		    return sb.toString();
		}

		
	}


