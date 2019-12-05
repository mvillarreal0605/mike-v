class RenamePhoneNumberInInquiries < ActiveRecord::Migration[5.2]
  def change
  	rename_column :inquiries, :phon_number, :phone_number
  end
end
