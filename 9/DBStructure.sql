use master
if exists(select * from sys.databases where name='Company')
drop database Company
GO

create database Company
GO

use Company
GO

create table Department (
	Id int not null primary key,
    Name nvarchar (20) not null,
    Address nvarchar (40) not null,
);
GO

create table Employee (
	Id int not null primary key,
    FirstName nvarchar (20) NOT NULL,
    LastName nvarchar (20) NOT NULL,
    DayOfBirth date not null
);
GO

create table Job (
	Id int not null primary key,
	Name nvarchar (30),
	MinSalary money
);
GO

create table Career (
	Id int not null primary key,
	Id_Employee int not null foreign key references  Employee(Id),
	Id_Department int not null foreign key references Department(Id),
	EmploymentDate date not null,
	DismissalDate date null
);
GO

create table Salary (
	Id int not null primary key,
	Id_Employee int not null foreign key references Employee(Id),
	Month tinyint not null,
	Year smallint not null,
	Salary int not null
);
Go