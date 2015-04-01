CREATE PROCEDURE [Models].[ActionsOfHH] 
@householdId int
AS

SELECT Id,'Action','When',UserId,HouseholdId
FROM Models.HistoricalActions 
WHERE (HouseholdId = @householdId)
