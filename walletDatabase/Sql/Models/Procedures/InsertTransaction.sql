CREATE PROCEDURE [Models].[InsertTransaction] 
(
	@description nvarchar(144), @username nvarchar(30), 
	@amount money, @flow bit, @reconciled bit 
) 
AS

DECLARE @T TABLE( [Id] int) 

INSERT INTO [Models].[Transactions] 
(
	[Description],
	[Reconciled],
	[CreatorId],
	[HouseholdId],
	[Created],
	[Amount],
	[flow]
)
OUTPUT
	Inserted.[Id]
INTO @T
VALUES
(
	@description, 
	@reconciled, 
	(
		SELECT Id FROM Security.Users
			WHERE UserName = @username
	), 
	(
		SELECT HouseholdId FROM Security.Users
			WHERE UserName = @username
	), 
	(SELECT GETDATE()), 
	@amount, 
	@flow 
)
SELECT * FROM @T
