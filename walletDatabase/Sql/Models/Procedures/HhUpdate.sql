CREATE PROCEDURE [Models].[HhUpdate] (
	@OldName nvarchar(30),
	@NewName nvarchar(30),
	@CreatorName nvarchar(30) 
)
AS

DECLARE @creatorId int 
EXEC Models.UserByName @username = @CreatorName, @UserId = @creatorId OUTPUT 

DECLARE @T TABLE( [Id] int )

UPDATE [Models].[Households] SET
	[Name] = @NewName,
	[CreatorId] = @creatorId
OUTPUT 
	Inserted.[Name] 
INTO @T
WHERE 
	[Name]=@OldName
SELECT * FROM @T