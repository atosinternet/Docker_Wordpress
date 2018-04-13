# Docker para Wordpress

## Introdução

Docker para Wordpress com Php (7.1-FPM), MySql (5.7) e NGinX (lastest).

## Stack

Estruturação

| Container  | Versions   | Service name |
| ---------- | ---------- | ------------ |
| Nginx      | lastes     | `nginx`      |
| PHP        | 7.1-FPM    | `php`        |
| MySQL      | 5.7        | `mysql`    |

Suporta Wordpress 4.8.1 ou superior

## Documentação

# Instalação

Baixar a versão do Wordpress 4.8.1 ou superior e instalar na pasta ./www/public/

# Configuração do Banco de Dados MySQL

- MYSQL_DATABASE=dev
- MYSQL_USER=dev
- MYSQL_PASSWORD=dev
- MYSQL_ROOT_PASSWORD=dev
