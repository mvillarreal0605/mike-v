class InquiryMailer < ApplicationMailer
  default from: 'notifications@mikevkc.dev'

  def inquiry_email(inquiry)
  	@inquiry = inquiry
  	mail(to: 'me@mikevkc.dev', subject: 'New Inquiry')
  end
end
