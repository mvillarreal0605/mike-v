class AddPhoneNumberToInquiries < ActiveRecord::Migration[5.2]
  def change
  	add_column :inquiries, :phon_number, :string
  end
end
