CREATE PROCEDURE [Models].[HhOfAuthor] 
	@UserName nvarchar(30) 
AS

DECLARE @UserId int 

SET @UserId = ( SELECT Id From [Security].Users WHERE UserName = @UserName ) 

SELECT Name FROM Models.Households
	WHERE CreatorId = @UserId 
