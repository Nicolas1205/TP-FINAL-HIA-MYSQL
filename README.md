# Dar Privilegios al cierto host y/o a todos

docker exec -it mysql1 mysql -u root -pnicolas

UPDATE mysql.user SET Host='%' WHERE User='root';
FLUSH PRIVILEGES;

GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

SELECT host FROM mysql.user WHERE User = 'root';

```sql
CREATE USER 'root'@'%' IDENTIFIED BY 'nicolas';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%';
FLUSH PRIVILEGES;
```
