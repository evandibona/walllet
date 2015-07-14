CREATE PROCEDURE [Models].[InvitationsOfHouse] (
	@House		int
)
AS

SELECT Models.Invitations.Id, Username, Models.Households.Name
	FROM Models.Invitations
	JOIN Security.Users ON Recipient = Security.Users.Id
	JOIN Models.Households ON Models.Invitations.House = Models.Households.Id
	WHERE House = @House