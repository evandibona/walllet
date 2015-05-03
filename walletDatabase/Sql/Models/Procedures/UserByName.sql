CREATE PROCEDURE [Models].[UserByName] 
	@username nvarchar(30), 
	@UserId int OUTPUT 
AS

SELECT @UserId = Id FROM Security.Users
WHERE UserName = @username