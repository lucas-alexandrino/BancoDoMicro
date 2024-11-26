package com.usuarios.ms.repository;

import com.usuarios.ms.model.Conta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository  extends JpaRepository<Conta, Integer>  {
	
	Conta findByNumero(int numero);
}
