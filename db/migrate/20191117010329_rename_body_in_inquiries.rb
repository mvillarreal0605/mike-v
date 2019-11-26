class RenameBodyInInquiries < ActiveRecord::Migration[5.2]
  def change
  	rename_column :inquiries, :body, :description
  end
end
