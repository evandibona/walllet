CREATE PROCEDURE [Models].[HhByHead] 
	@UserId		int 
AS

SELECT Id
	FROM [Models].[Households]
	WHERE Head=@UserId