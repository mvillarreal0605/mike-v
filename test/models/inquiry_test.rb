require 'test_helper'

class InquiryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  test "should not save without name and email" do
  	inquiry = Inquiry.new
  	assert_not inquiry.save, "Saved a blank inquiry"
  	assert_not Inquiry.new(name: "name",message: "message", phone_number: "8168764743", duedate: Time.now).save, "Saved without email"
  	assert_not Inquiry.new(email: "name@example.com", message: "message", phone_number: "8168764743", duedate: Time.now).save, "Saved without name"
  end
end
