CREATE PROCEDURE [Models].[ListUsers] 
AS

SELECT Username, Name, Id
FROM Security.Users
