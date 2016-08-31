use Company
GO

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
select Id from Employee
	where Id in (
	select Id_Employee from Salary
		where Month = 5 and Year = 2015 and Salary < any (
		select Salary from Salary 
			where Month < 5 and Year = 2015))
GO

-- #7
select Id, Name, (select COUNT(Id_Department) from Career
	where Id_Department = id and DismissalDate is null) from Department
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
select FirstName, DATEDIFF(DAY, EmploymentDate, GETDATE()) from Employee as e join Career as c
	on e.Id = c.Id_Employee
GO

-- #12
update Job  
    set MinSalary = MinSalary * 1.5
GO

-- #13
delete Salary
	where Year < 2015