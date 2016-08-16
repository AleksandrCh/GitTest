create database Company
GO

use Company

create table Department (
	Id int not null constraint primary_id primary key,
    Name nvarchar (20) not null,
    Address nvarchar (40) not null,
);
GO

create table Employee (
	Id int not null constraint primary_id primary key,
    FirstName         NCHAR (20) NOT NULL,
    LastName          NCHAR (20) NOT NULL,
    DepartamentNumber CHAR (4)   NULL
);
GO