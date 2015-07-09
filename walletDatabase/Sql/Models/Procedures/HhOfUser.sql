CREATE PROCEDURE [Models].[HhOfUser] 
	@UserName nvarchar(30) 
AS

DECLARE @HouseId int

SET @HouseId = ( 
		SELECT HouseholdId From [Security].Users 
			WHERE UserName = @UserName 
) 

SELECT Name From Models.Households
	WHERE Id = @HouseId