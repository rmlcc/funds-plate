CREATE DATABASE IF NOT EXISTS yingmai;
USE yingmai;
CREATE TABLE IF NOT EXISTS `user_table`(
       `user_id` INT UNSIGNED AUTO_INCREMENT,
       `user_name` VARCHAR(20) NOT NULL,
       `passwd` VARCHAR(512) NOT NULL,
       `address` VARCHAR(128) NOT NULL,
       `registerd_address` VARCHAR(128) NOT NULL,
       `share_address` VARCHAR(128) NOT NULL,
       PRIMARY KEY(`user_id`)
 );

/*
pay_type���ͣ�
0����ֵ
1������
2������
3���ⶳ
4������
*/
CREATE TABLE IF NOT EXISTS `pay_table`(
       `pay_id` INT UNSIGNED AUTO_INCREMENT,
       `pay_type` INT UNSIGNED,
       `pay_amount` FLOAT,
       `pay_date` DATE,
       `user_id` INT UNSIGNED,
       PRIMARY KEY(`pay_id`)
 );
       

