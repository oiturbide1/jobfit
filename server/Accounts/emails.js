Accounts.emailTemplates.siteName = "EmployerMatch";
Accounts.emailTemplates.from     = "EmployerMatch <admin@employermatch.com>";

Accounts.emailTemplates.verifyEmail = {
  subject() {
    return "[EmployerMatch] Verify Your Email Address";
  },
  text( user, url ) {
    let emailAddress   = user.emails[0].address,
        urlWithoutHash = url.replace( '#/', '' ),
        supportEmail   = "support@employermatch.com",
        emailBody      = `To verify your email address (${emailAddress}) visit the following link:\n\n${urlWithoutHash}\n\n If you did not request this verification, please ignore this email.`;

    return emailBody;
  }
};
