 CREATE TABLE Models.Invitations
 (
    [Id]			int		IDENTITY(1,1)	NOT NULL,
    [House]			int			  			NOT NULL, 
    [From]			int			  			NOT NULL, 
    [Recipient]		int			  			NOT NULL, 
 )
 GO

ALTER TABLE [Models].[Invitations]
	ADD CONSTRAINT [PK_Models.Invitations] PRIMARY KEY CLUSTERED ( [Id] ASC )
GO

AUTOPROC Delete,Insert [Models].[Invitations] 
GO
