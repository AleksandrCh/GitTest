create database Company
GO

use Company

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
	name nvarchar (30),
	minSalary money
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
	Id_Employee int not null foreign key references Employee(Id),
	Month tinyint not null,
	Year tinyint not null,
	salary int not null
);
Go

insert into Department (Id, Name, Address) values
(0, 'D4', 'Толстого 12'),
(1, 'D5', 'Толстого 12')
GO

