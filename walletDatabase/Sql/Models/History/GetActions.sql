CREATE PROCEDURE [Models].[GetHistoricalActions] 
@householdId int
AS

SELECT 'Id','Action','When','UserId','HouseholdId' 
FROM Models.HistoricalActions 
WHERE (HouseholdId = @householdId)
