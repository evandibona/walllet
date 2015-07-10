CREATE PROCEDURE [Models].[HhOfUser] 
	@UserId		int 
AS

SELECT HouseholdId
	FROM [Security].[Users]
	WHERE Id=@UserId