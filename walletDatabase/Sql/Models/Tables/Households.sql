﻿ CREATE TABLE Models.Households
 (
    [Id]			int		IDENTITY(1,1)	NOT NULL, --Identity( seed, increment ) 
    [Name]			nvarchar(30)  			NOT NULL, 
    [Head]			int			  			NOT NULL, 
 )
 GO

ALTER TABLE [Models].[Households]
	ADD CONSTRAINT [PK_Models.Households] PRIMARY KEY CLUSTERED ( [Id] ASC )
GO
