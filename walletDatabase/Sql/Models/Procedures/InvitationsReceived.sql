CREATE PROCEDURE [Models].[InvitationsReceived] (
	@UserId			int
)
AS

SELECT Models.Invitations.Id, Username, Models.Households.Name
	FROM Models.Invitations
	JOIN Security.Users ON [From] = Security.Users.Id
	JOIN Models.Households ON Models.Invitations.House = Models.Households.Id
	WHERE Recipient = @UserId 