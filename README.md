# Docker para Wordpress

## Introdução

Docker para Wordpress com Php (7.1-FPM), MySql (5.7) e NGinX (lastest).

## Stack

Estruturação

| Container  | Versions   | Service name |
| ---------- | ---------- | ------------ |
| Nginx      | lastest    | `nginx`      |
| PHP        | 7.1-fpm    | `php`        |
| MySQL      | 5.7        | `mysql`      |
| Grunt/Node | 5.7        | `grunt`      |

Suporta Wordpress 4.8.1 ou superior

## Documentação

# Instalação

Baixar a versão do Wordpress 4.8.1 ou superior e instalar na pasta ./www/public/
Wordpress rodando na http://localhost:8000

# Configuração do Banco de Dados MySQL

- MYSQL_DATABASE=dev
- MYSQL_USER=dev
- MYSQL_PASSWORD=dev
- MYSQL_ROOT_PASSWORD=dev