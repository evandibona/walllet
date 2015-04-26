CREATE PROCEDURE [Models].[GetTransactionsByUser] 
	@username nvarchar(30) 
AS

SELECT Description, Created, Amount, flow, Reconciled, Name
FROM Security.Users
INNER JOIN Models.Transactions
	ON Security.Users.Id = Models.Transactions.CreatorId
	WHERE UserName = @username