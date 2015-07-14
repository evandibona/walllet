CREATE PROCEDURE [Models].[HhByHead] 
	@UserId		int 
AS

SELECT ISNULL(MAX(Id), 0) 
	FROM [Models].[Households]
	WHERE Head=@UserId
