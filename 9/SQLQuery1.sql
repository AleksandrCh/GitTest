create database Company
GO

drop table Department
drop table Employee
drop table Job
drop table Career
drop table Salary
GO

use Company

-------Create tables--------

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

-------Insert data-------
insert into Department (Id, Name, Address) values
(0, 'D4', 'Tolstogo 12'),
(1, 'D5', 'Tolstogo 12')
GO

insert into Employee (Id, FirstName, LastName, DayOfBirth) values
(0, 'Aleksandr', 'Chechyotko', '1996-01-30'),
(1, 'Denis', 'Antonenko', '1990-10-20'),
(2, 'Ira', 'Neira', '1994-04-16'),
(3, 'Evgeny', 'Razumov', '1992-03-24'),
(4, 'Leonid', 'Yakubovich', '1960-12-02')
GO

insert into Job (id, Name, MinSalary) values 
(0, 'Junior javascript developer', 400),
(1, 'Junior ASP.NET developer', 300),
(2, 'Middle javascrip developer', 500),
(3, 'Middle ASP.NET developer', 600),
(4, 'Middle Java developer', 700)
GO

insert into Salary (Id, Id_Employee, Month, Year, Salary) values 
(0, 0, 01, 2015, 400),
(1, 1, 01, 2015, 1000),
(2, 2, 01, 2015, 800),
(3, 3, 01, 2015, 1000),
(4, 4, 01, 2015, 2000),
(5, 0, 01, 2016, 2000),
(6, 1, 01, 2016, 2000),
(7, 2, 01, 2016, 2000),
(8, 3, 01, 2016, 2000),
(9, 4, 01, 2016, 2000)
GO

insert into Career (Id, Id_Employee, Id_Department, EmploymentDate, DismissalDate) values 
(0, 0, 0, '2016-07-01', null),
(1, 1, 1, '2010-01-02', null),
(2, 2, 0, '2009-12-15', '2016-03-20'),
(3, 3, 1, '2010-03-10', null),
(4, 2, 1, '2000-12-10', null)
GO

---------Query------------------
-- #1 
select Id, FirstName, LastName, DayOfBirth from Employee
GO

-- #2
select Id, MinSalary from Job
	where MinSalary <= 500
GO

-- #3
select avg(Salary) as 'average salary' from Salary as s 
	where s.Month = 1 and s.Year = 2015
GO

-- #4
select FirstName, DATEDIFF(DAY, DayOfBirth, GETDATE()) / 364 as Age from Employee 
	where DayOfBirth = (select min(DayOfBirth) from Employee)
GO

-- #5
select LastName from Employee 
	where id in (select Id_Employee from Salary where Month = 1 and Year = 2015)
GO

-- #6
insert into Salary (Id, Id_Employee, Month, Year, Salary) values 
(0, 0, 03, 2015, 1000),
(1, 1, 04, 2015, 1000),
(2, 2, 04, 2015, 800),
(3, 3, 04, 2015, 1000),
(4, 4, 04, 2015, 2000),
(5, 0, 05, 2015, 500),
(6, 1, 05, 2015, 900),
(7, 2, 05, 2015, 100),
(8, 3, 01, 2015, 2000),
(9, 4, 01, 2016, 2000)
GO

select Id from Employee
	where Id in (select Id_Employee from Salary
		where Month = 5 and Year = 2015 and Salary < any (
		select Salary from Salary 
			where Month < 5 and Year = 2015))
GO

-- #7
select Id, Name, (select COUNT(Id_Department) from Career where Id_Department = id and DismissalDate is null) from Department
GO

-- #8
select FirstName, avg(Salary) as 'average salary' from Salary as s join Employee as e 
	on s.Id_Employee = e.Id
	where s.Year = 2015
	group by FirstName
GO

select Id_Employee, avg(Salary) as 'average salary' from Salary 
	where Year = 2015
	group by Id_Employee
GO

-- #9
select Id_Employee, avg(Salary) as 'average salary' from Salary 
	where Year = 2015
	group by Id_Employee
	having COUNT(*) > 1
GO

-- #10
select FirstName from Employee as e join Salary as s on e.Id = s.Id_Employee 
	where s.Salary > 1000 and Month = 1 and Year = 2015 
GO

-- #11
select FirstName, DATEDIFF(DAY, EmploymentDate, GETDATE()) from Employee as e left join Career as c
	on e.Id = c.Id_Employee
GO

-- #12
update Job  
    set MinSalary = MinSalary * 1.5
GO

-- #13
insert into Salary (Id, Id_Employee, Month, Year, Salary) values 
(10, 0, 11, 2013, 400),
(11, 1, 01, 2013, 1000),
(22, 2, 02, 2013, 800),
(33, 3, 01, 2013, 1000),
(44, 4, 01, 2013, 2000),
(55, 0, 01, 2014, 2000),
(66, 1, 01, 2014, 2000),
(77, 2, 01, 2014, 2000),
(89, 3, 01, 2014, 2000),
(90, 4, 01, 2014, 2000)

select * from Salary

delete Salary
	where Year < 2015

select * from Salary
GO