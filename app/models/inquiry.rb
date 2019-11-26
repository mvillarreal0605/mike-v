class Inquiry < ApplicationRecord
  validates :name, presence: true
  validates :contact, presence: true
  validates :description, presence: true
end
