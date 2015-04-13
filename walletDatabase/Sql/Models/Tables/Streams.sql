 CREATE TABLE [Models].[Streams]
 (
    [Id]			int		IDENTITY(1,1)	NOT NULL, --Identity( seed, increment ) 
	[Name]			nvarchar(50)			NOT NULL, 
	[Amounts]		money					NOT NULL, 
	[Period]		int						NOT NULL, 
	[Recurring]		bit						NOT NULL, 
	[Flow]			bit						NOT NULL, 
 )
 GO

ALTER TABLE [Models].[Streams]
	ADD CONSTRAINT [PK_Models.Streams] PRIMARY KEY CLUSTERED ( [Id] ASC )
GO

AUTOPROC INSERT [Models].[Streams] 
GO