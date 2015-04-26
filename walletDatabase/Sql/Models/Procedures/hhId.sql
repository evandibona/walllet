CREATE PROCEDURE [Models].[HhId] 
	@name nvarchar(30)
AS

SELECT Id FROM Models.Households
WHERE Name = @name