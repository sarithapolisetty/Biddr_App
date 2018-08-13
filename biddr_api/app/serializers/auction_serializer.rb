class AuctionSerializer < ActiveModel::Serializer
  attributes :id, :title, :details, :ends_on, :reserve_price, :created_at, :updated_at

  belongs_to :user

  has_many :bids

  class BidSerializer < ActiveModel::Serializer
    attributes :id, :price, :created_at, :updated_at

    belongs_to :user
  end
end
