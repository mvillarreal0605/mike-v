class RenameContactInInquiries < ActiveRecord::Migration[5.2]
  def change
  	rename_column :inquiries, :contact, :email
  end
end
