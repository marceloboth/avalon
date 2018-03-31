class Api::V1::CategoryResource < JSONAPI::Resource
  attribute :name
  has_many :pages
end
