 CREATE TABLE Models.BalanceCheckpoints
 (
    [Id]			int		IDENTITY(1,1)	NOT NULL, --Identity( seed, increment ) 
    [Value]			money					NULL, 
 )
 GO

ALTER TABLE [Models].[BalanceCheckpoints]
	ADD CONSTRAINT [PK_Models.BalanceCheckpoints] PRIMARY KEY CLUSTERED ( [Id] ASC )
GO

AUTOPROC Insert,Delete,Update [Models].[BalanceCheckpoints] 
GO