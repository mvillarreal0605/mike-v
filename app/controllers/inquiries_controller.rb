class InquiriesController < ApplicationController
  def create
    @inquiry = Inquiry.new(inquiry_params)

    if @inquiry.save
      InquiryMailer.with(inquiry: @inquiry).inquiry_email.deliver_now
      redirect_to root_path
    end
  end

  private 

  def inquiry_params
  	params.require(:inquiry).permit(:name, :contact, :description, :duedate)
  end
end