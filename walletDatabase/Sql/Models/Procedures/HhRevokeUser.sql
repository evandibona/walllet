CREATE PROCEDURE [Models].[HhRevokeUser] (
	@UserId int 
)
AS

DECLARE @T TABLE( [Id] int )

UPDATE [Security].[Users] SET
	[HouseholdId] = NULL
OUTPUT 
	Inserted.[Id] 
INTO @T
WHERE 
	[Id]=@UserId
SELECT * FROM @T