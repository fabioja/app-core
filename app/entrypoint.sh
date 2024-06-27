#!/bin/sh

# Rodar migrações do TypeORM
npm run typeorm migration:run

# Iniciar a aplicação
exec "$@"