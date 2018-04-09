class Api::V1::MenuResource < JSONAPI::Resource
  attribute :name

  has_many :menu_items
end
