CREATE PROCEDURE [Models].[InvitationRespond] (
	@Id			int, 
	@Action		bit 
)
AS

DECLARE @HhId int, @UserId int
	SELECT @HhId = House, @UserId = Recipient 
	FROM Models.Invitations
	WHERE Id = @Id 

IF @Action = 1 
	EXEC Models.HhAddUser @HhId, @UserId

EXEC Models.DeleteInvitation @Id 