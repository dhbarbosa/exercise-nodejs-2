FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=123456789
ENV MYSQL_DATABASE=dba

COPY ./script/init.sql /docker-entrypoint-initdb.d/

EXPOSE 3306

CMD ["mysqld"]

