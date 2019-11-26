class CreateInquiries < ActiveRecord::Migration[5.2]
  def change
    create_table :inquiries do |t|
      t.string :name
      t.string :contact
      t.text :body
      t.datetime :duedate

      t.timestamps
    end
  end
end
