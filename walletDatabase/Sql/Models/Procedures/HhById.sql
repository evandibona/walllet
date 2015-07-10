CREATE PROCEDURE [Models].[HhById] 
	@Id int
AS

SELECT Name FROM Models.Households
WHERE Id = @Id