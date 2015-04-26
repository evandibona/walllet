CREATE PROCEDURE [Models].[HhName] 
	@id int
AS

SELECT Name FROM Models.Households
WHERE Id = @id