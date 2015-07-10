CREATE PROCEDURE [Models].[HhAddUser] (
	@HhId nvarchar(30), 
	@UserId int 
)
AS

DECLARE @T TABLE( [Id] int )

UPDATE [Security].[Users] SET
	[HouseholdId] = @HhId
OUTPUT 
	Inserted.[Id] 
INTO @T
WHERE 
	[Id]=@UserId
SELECT * FROM @T