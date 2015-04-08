 CREATE TABLE [Models].[HistoricalActions]
 (
    [Id]			int		IDENTITY(1,1)	NOT NULL, --Identity( seed, increment ) 
    [Action]		nvarchar(150)  			NOT NULL, 
	[When]			date					NOT NULL, 
	[UserId]		int						NOT NULL, 
	[HouseholdId]	int						NOT NULL, 
 )
 GO

ALTER TABLE [Models].[HistoricalActions]
	ADD CONSTRAINT [PK_Models.HistoricalActions] PRIMARY KEY CLUSTERED ( [Id] ASC )
GO

AUTOPROC INSERT [Models].[HistoricalActions] 
GO