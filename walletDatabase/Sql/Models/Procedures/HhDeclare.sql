CREATE PROCEDURE [Models].[HhDeclare] (
	@Name nvarchar(30), 
	@UserId int 
)
AS

DECLARE @houses int, @Id int
SET @houses = 
	(	
		SELECT count(*)
		FROM Models.Households
		WHERE Head = @UserId
	)
	
SET @Id = (	SELECT Id FROM Models.Households 
				WHERE Head = @UserId )

IF @houses = 0 
	EXEC [Models].HhCreate @Name, @UserId 
ELSE
	EXEC [Models].HhUpdate @Id, @Name

