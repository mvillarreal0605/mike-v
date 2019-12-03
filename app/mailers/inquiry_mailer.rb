class InquiryMailer < ApplicationMailer
  # default from: 'michael@bellhour.com'

  def inquiry_email(inquiry)
  	@inquiry = inquiry
  	mail(to: 'hello@mikevkc.dev', subject: 'New Inquiry')
  end
end
