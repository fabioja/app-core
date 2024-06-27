FROM postgres:13

# Copie o script de inicialização para o diretório de inicialização do PostgreSQL
COPY init.sql /docker-entrypoint-initdb.d/

RUN echo "port = 5432" >> /usr/share/postgresql/postgresql.conf

EXPOSE 5432