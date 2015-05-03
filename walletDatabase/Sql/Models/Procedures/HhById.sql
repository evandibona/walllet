CREATE PROCEDURE [Models].[HhById] 
	@id int
AS

SELECT Name FROM Models.Households
WHERE Id = @id