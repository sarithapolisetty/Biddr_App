class AuctionCollectionSerializer < ActiveModel::Serializer
  attributes :id, :title, :details, :ends_on, :reserve_price, :created_at, :updated_at
end
