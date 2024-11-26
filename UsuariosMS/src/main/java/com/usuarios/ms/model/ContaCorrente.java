package com.usuarios.ms.model;

import jakarta.persistence.Entity;
import jakarta.persistence.DiscriminatorValue;


@Entity
@DiscriminatorValue("1")  // Tipo 1 será para Conta Corrente
public class ContaCorrente extends Conta {

	private float limite;
	
    public ContaCorrente() {
        super();
    }

	public ContaCorrente(int numero, int agencia, String titular, float saldo, float limite) {
		super(numero, agencia, titular, saldo);
		this.limite = limite;

	}

	public float getLimite() {
		return limite;
	}

	public void setLimite(float limite) {
		this.limite = limite;
	}
	

    public String getTipo() {
        return "Conta Corrente"; // modificar caso queira tratar melhor no front
    }
    
	@Override
	public boolean sacar(float valor) {

		if (this.getSaldo() + this.getLimite() < valor) {
			System.out.println("\n Saldo Insuficiente!");
			return false;
		}

		this.setSaldo(this.getSaldo() - valor);
		return true;

	}
	
	@Override
	public String visualizar() {
	    StringBuilder sb = new StringBuilder(super.visualizar());
	    sb.append("Limite de Crédito: ").append(this.limite).append("\n");
	    return sb.toString();
	}



}