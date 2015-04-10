CREATE PROCEDURE [Models].[GetHistoricalActions] 
	@username nvarchar(30) 
AS

DECLARE @householdId int
SET @householdId = 
	( 
		SELECT HouseholdId FROM Security.Users
			WHERE UserName = @username
	)

SELECT [Action],[When],Name FROM Models.HistoricalActions 
	JOIN Security.Users ON Security.Users.Id = Models.HistoricalActions.UserId
	WHERE Models.HistoricalActions.HouseholdId = @householdId