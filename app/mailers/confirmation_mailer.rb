class ConfirmationMailer < ApplicationMailer
  default from: 'hello@mikevkc.dev'

  def confirmation_email(inquiry)
  	mail(to: inquiry.email, subject: 'Inquiry Received')
  end
end
