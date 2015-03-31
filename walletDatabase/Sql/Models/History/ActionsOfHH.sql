CREATE PROCEDURE [Models].[ActionsOfHH] 
AS

DECLARE @householdId int

SELECT Id,'Action','When',UserId,HouseholdId
FROM Models.HistoricalActions 
WHERE (HouseholdId = @householdId)
