# Preview all emails at http://localhost:3000/rails/mailers/inquiry_mailer
class InquiryMailerPreview < ActionMailer::Preview
  def inquiry_email
  	InquiryMailer.with(inquiry: Inquiry.first).inquiry_email
  end
end
