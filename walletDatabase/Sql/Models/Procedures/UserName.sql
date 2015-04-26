CREATE PROCEDURE [Models].[UserName] 
	@id int 
AS

SELECT Name FROM Security.Users
WHERE Id = @id