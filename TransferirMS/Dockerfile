# Usando uma imagem base Java
FROM openjdk:17-jdk-slim

# Configurar o diretório de trabalho
WORKDIR /app

# Copiar o JAR gerado para o container
COPY target/demo-0.0.1-SNAPSHOT.jar app.jar

# Expor a porta onde o serviço irá rodar
EXPOSE 8080

# Comando para iniciar o microsserviço
ENTRYPOINT ["java", "-jar", "app.jar"]
