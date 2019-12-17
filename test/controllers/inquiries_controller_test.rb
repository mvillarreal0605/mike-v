require 'test_helper'

class InquiriesControllerTest < ActionDispatch::IntegrationTest
  test "should create inquiry" do
    assert_difference('Inquiry.count') do
      post inquiries_url, params: { inquiry: { name: 'John Doe', email: 'johndoe@gmail.com' } }
    end
    assert_redirected_to :root
  end

  test "should get root" do
    get root_url
    assert_response :success, "Root not set"
  end

end
