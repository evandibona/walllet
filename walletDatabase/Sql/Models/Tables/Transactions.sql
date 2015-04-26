 CREATE TABLE Models.Transactions
 (
    [Id]			int		IDENTITY(1,1)	NOT NULL, --Identity( seed, increment ) 
    [Description]	nvarchar(144)			NULL, 
	[CreatorId]		int						NOT NULL, 
	[HouseholdId]	int						NULL, 
	[Created]		date					NOT NULL, 
	[PoolId]		int						NULL, 
    [Reconciled]	bit						NOT NULL, 
	[Amount]		money					NOT NULL, 
	[Flow]			bit						NOT NULL, 
 )
 GO

ALTER TABLE [Models].[Transactions]
	ADD CONSTRAINT [PK_Models.Transactions] PRIMARY KEY CLUSTERED ( [Id] ASC )
GO

AUTOPROC Delete,Update [Models].[Transactions] 
GO