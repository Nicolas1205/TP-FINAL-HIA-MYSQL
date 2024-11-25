#!/bin/sh
echo "Waiting for MySQL cluster to be ready..."
while ! mysqladmin ping -h mysql1 --silent; do
  sleep 1
done
echo "MySQL cluster is ready. Starting backend..."
exec npm run start
