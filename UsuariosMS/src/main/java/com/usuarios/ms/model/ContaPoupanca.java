package com.usuarios.ms.model;

//import java.util.Scanner;

import jakarta.persistence.Entity;
import jakarta.persistence.DiscriminatorValue;

@Entity
@DiscriminatorValue("2")  // Tipo 2 será para Conta Poupança
public class ContaPoupanca extends Conta {
    //Scanner leia = new Scanner(System.in);
	private int aniversario;
	
	   public ContaPoupanca() {
	        super();
	    }

	public ContaPoupanca(int numero, int agencia, String titular, float saldo, int aniversario) {
		super(numero, agencia, titular, saldo);
		this.aniversario = aniversario;
	}

	public int getAniversario() {
		return aniversario;
	}

	public void setAniversario(int aniversario) {
		this.aniversario = aniversario;
	}
	
	
    public String getTipo() {
        return "Conta Poupança"; // modificar caso queira tratar melhor no front
    }

    @Override
    public String visualizar() {
        StringBuilder sb = new StringBuilder(super.visualizar());
        sb.append("Aniversário da conta: ").append(this.aniversario).append("\n");
        return sb.toString();
    }

		
}
