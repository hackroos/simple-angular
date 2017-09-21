SET NAMES UTF8;
DROP DATABASE IF EXISTS wise;
CREATE DATABASE wise CHARSET=UTF8;
 USE wise;

/**公司资讯**/
CREATE TABLE c_news(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	cname VARCHAR(32),
	cnew VARCHAR(32),
	cpic VARCHAR(32),
	contentId INT 
);

CREATE TABLE c_news_detail(
	id INT,
	date INT,
	month INT,
	year INT,
	detail VARCHAR(128)
);

INSERT INTO c_news VALUES(NULL,"公司资讯","Company News","HomeNew.jpg",10);

INSERT INTO c_news_detail VALUES
(10,25,10,2016,"公司通过“双软”企业认证"),
(10,09,10,2016,"公司通过ISO9001:2008质量管理体系认证"),
(10,19,8,2016,"公司搬家啦——迎风聚智搬迁至武汉城市合伙人基地"),
(10,18,01,2016,"迎风聚智入选武汉市“黄鹤英才”计划"),
(10,02,04,2015,"公司喜获“湖北省高新技术产业投资有限公司”风险投资");