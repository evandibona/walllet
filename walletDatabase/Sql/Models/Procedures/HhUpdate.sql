CREATE PROCEDURE [Models].[HhUpdate] (
	@Id			int, 
	@Name		nvarchar(30)
)
AS

DECLARE @T TABLE( [Id] int )

UPDATE [Models].[Households] SET
	[Name] = @Name
OUTPUT 
	Inserted.[Id] 
INTO @T
WHERE 
	[Id]=@Id
SELECT * FROM @T