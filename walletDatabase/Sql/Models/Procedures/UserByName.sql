CREATE PROCEDURE [Models].[UserByName] 
	@Username nvarchar(30) 
AS

SELECT Id FROM Security.Users
WHERE Username = @Username