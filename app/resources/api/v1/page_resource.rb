class Api::V1::PageResource < JSONAPI::Resource
  attributes :title, :slug, :body, :publicated
end
