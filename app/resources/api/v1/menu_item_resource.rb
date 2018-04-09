class Api::V1::MenuItemResource < JSONAPI::Resource
  attributes :title, :url, :order

  has_one :menu
end
