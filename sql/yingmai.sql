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
pay_type类型：
0：充值
1：提现
2：冻结
3：解冻
4：收益
*/
CREATE TABLE IF NOT EXISTS `pay_table`(
       `pay_id` INT UNSIGNED AUTO_INCREMENT,
       `pay_type` INT UNSIGNED,
       `pay_amount` FLOAT,
       `pay_date` DATE,
       `user_id` INT UNSIGNED,
       PRIMARY KEY(`pay_id`)
 );
       

