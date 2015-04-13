 CREATE TABLE Models.BankAccounts
 (
    [Id]			int		IDENTITY(1,1)	NOT NULL, --Identity( seed, increment ) 
    [Name]			nvarchar(50)			NULL, 
 )
 GO

ALTER TABLE [Models].[BankAccounts]
	ADD CONSTRAINT [PK_Models.BankAccounts] PRIMARY KEY CLUSTERED ( [Id] ASC )
GO

AUTOPROC Insert,Delete,Update [Models].[BankAccounts] 
GO