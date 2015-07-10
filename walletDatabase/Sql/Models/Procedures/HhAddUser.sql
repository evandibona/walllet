CREATE PROCEDURE [Models].[HhAddUser] (
	@HhId nvarchar(30), 
	@UserId int 
)
AS

-- Set the user's Household property to the House. --

DECLARE @T TABLE( [Id] int )

UPDATE [Security].[Users] SET
	[HouseholdId] = @HhId
OUTPUT 
	Inserted.[Id] 
INTO @T
WHERE 
	[Id]=@UserId
SELECT * FROM @T