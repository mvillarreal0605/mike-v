class RenameDescriptionInInquiries < ActiveRecord::Migration[5.2]
  def change
  	rename_column :inquiries, :description, :message
  end
end
