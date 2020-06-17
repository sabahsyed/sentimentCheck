#drop database if exists Message;
#create database Message;

use Message;

insert into messages (username, message, sentiment, likes) values ("test 1", "dagon rahl", 0, 23);
insert into messages (username, message, sentiment, likes, dislikes) values ("test 2", "sasquach", 1, 2, 50);

select * from messages