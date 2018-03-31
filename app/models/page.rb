class Page < ApplicationRecord
  include FriendlyId
  friendly_id :title, use: :slugged

  belongs_to :category

  validates :title, presence: true
  validates :body, presence: true
end
