CREATE PROCEDURE [Models].[ListUsersOfHh] 
	@HouseId int
AS

SELECT Username, Name, Id
	FROM Security.Users
	WHERE HouseholdId = @HouseId
