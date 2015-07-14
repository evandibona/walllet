CREATE PROCEDURE [Models].[InvitationsReceived] (
	@UserId			int
)
AS

SELECT Models.Invitations.Id, Username
	FROM Models.Invitations
	JOIN Security.Users ON Recipient = Security.Users.Id
	WHERE Security.Users.Id = @UserId