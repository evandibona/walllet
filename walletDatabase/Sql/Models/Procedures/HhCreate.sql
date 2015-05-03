CREATE PROCEDURE [Models].[HhCreate] (
	@Name nvarchar(30),
	@CreatorName nvarchar(30) 
)
AS

DECLARE @CreatorId int 
EXEC Models.UserByName @username = @CreatorName, @UserId = @CreatorId OUTPUT 

DECLARE @T TABLE(
[Id] int)

INSERT INTO [Models].[Households]
(
	[Name],
	[CreatorId]
)
OUTPUT
	Inserted.[Id]
INTO @T
VALUES
(
	@Name,
	@CreatorId
)
SELECT * FROM @T