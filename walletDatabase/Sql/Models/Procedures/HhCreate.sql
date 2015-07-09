CREATE PROCEDURE [Models].[HhCreate] (
	@Name	nvarchar(30),
	@UserId int
)
AS

DECLARE @T TABLE(
	[Id] int)

INSERT INTO [Models].[Households]
(
	[Name],
	[Head]
)
OUTPUT
	Inserted.[Id]
INTO @T
VALUES
(
	@Name,
	@UserId
)
SELECT * FROM @T