CREATE PROCEDURE [Models].[InvitationsOfHouse] (
	@House		int
)
AS

SELECT Models.Invitations.Id, Username
	FROM Models.Invitations
	JOIN Security.Users ON Recipient = Security.Users.Id
	WHERE House = @House