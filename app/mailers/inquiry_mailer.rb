class InquiryMailer < ApplicationMailer
  default from: 'notifications@example.com'

  def inquiry_email
  	@inquiry = params[:inquiry]
  	mail(to: 'michael@bellhour.com', subject: 'New Inquiry')
  end
end
