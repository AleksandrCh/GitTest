use Company
GO

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

insert into Career (Id, Id_Employee, Id_Department, EmploymentDate, DismissalDate) values 
(0, 0, 0, '2016-07-01', null),
(1, 1, 1, '2010-01-02', null),
(2, 2, 0, '2009-12-15', '2016-03-20'),
(3, 3, 1, '2010-03-10', null),
(4, 2, 1, '2000-12-10', null)
GO

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