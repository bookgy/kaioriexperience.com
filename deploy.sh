#!/bin/bash

set -e

echo "Generando build..."
npm run build

echo "Estado de Git..."
git status

echo "Añadiendo cambios..."
git add .

if git diff --cached --quiet; then
  echo "No hay cambios para commitear."
else
  echo "Creando commit..."
  git commit -m "Actualiza web"
fi

echo "Subiendo a GitHub..."
git push origin main

echo "Ejecutando deploy en CDmon..."
ssh bookgy4a@134.0.14.185 '/deploy/deploy-agendic.sh'

echo "Deploy completado."