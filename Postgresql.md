 brew install postgresql
 brew services start postgresql / brew services stop postgresql
 createdb 'test'

~ to connect to the database using terminal and open table in terminal 
 psql 'table_name' 

~ to create table
 CREATE TABLE table_name (column_1 datatype, column_2 datatype, column_3 datatype);
 INSERT INTO users (column_1, column_2, column_3) VALUES (value_1, value_2, value_3);
 SELECT column_1, column_2, column_3 FROM table_name;
 ALTER TABLE table_name ADD column_name datatype;

~ to update altogether
 UPDATE table_name SET column_name = value; 

~ to update selected columns
 UPDATE table_name SET column_name = value WHERE some_column = some_value;
 UPDATE table_name SET column_name = value WHERE some_column = some_value OR some_column2 = some_value2 ;

~ to delete a row
DELETE FROM table_name WHERE some_column = some_value;

~ to drop table
 DROP TABLE table_name;

~ LIKE COMMAND
SELECT * FROM table_name WHERE name LIKE 'A%';

~ to sort 
SELECT * FROM table_name ORDER BY column_name DESC;

~ to use a function
SELECT function_name(column_name) FROM table_name ;
e.g SELECT AVG(age) FROM users ;

~ to join
e.g SELECT * FROM users JOIN login ON users.name = login.name;

