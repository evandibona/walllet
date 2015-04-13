 CREATE TABLE Models.Pools
 (
    [Id]			int		IDENTITY(1,1)	NOT NULL, --Identity( seed, increment ) 
	[Name]			nvarchar(60)			NOT NULL, 
	[Parent]		int						NOT NULL, 
	[Children]		nvarchar(60)			NOT NULL, 
 )
 GO

ALTER TABLE [Models].[Pools]
	ADD CONSTRAINT [PK_Models.Pools] PRIMARY KEY CLUSTERED ( [Id] ASC )
GO

AUTOPROC Insert,Delete,Update [Models].[Pools] 
GO