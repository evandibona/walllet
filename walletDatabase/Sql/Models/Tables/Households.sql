 -- I need a mechanism to prevent duplicate households from being created -- http://databases.aspfaq.com/database/how-do-i-prevent-duplicates-in-a-table.html 
 CREATE TABLE Models.Households
 (
    [Id]			int		IDENTITY(1,1)	NOT NULL, --Identity( seed, increment ) 
    [Name]			nvarchar(30)  			NOT NULL, 
    [CreatorId]		int			  			NOT NULL, 
 )
 GO

ALTER TABLE [Models].[Households]
	ADD CONSTRAINT [PK_Models.Households] PRIMARY KEY CLUSTERED ( [Id] ASC )
GO
