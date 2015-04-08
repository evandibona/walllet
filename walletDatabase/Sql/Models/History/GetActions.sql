CREATE PROCEDURE [Models].[GetHistoricalActions] 
	@householdId int
AS

SELECT [Action],[When],Name FROM Models.HistoricalActions 
	JOIN Security.Users ON Security.Users.Id = Models.HistoricalActions.UserId
	WHERE Models.HistoricalActions.HouseholdId = @householdId 