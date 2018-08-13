class Auction < ApplicationRecord
  belongs_to :user
  has_many :bids, dependent: :destroy

   validates :title, presence: true,
    uniqueness: { message: 'must be unique' },
    length: { minimum:  3 }

    validates :details, presence: true

    validates :ends_on,
    presence: true

    validates :reserve_price,
    presence: true, numericality: { greater_than_or_equal_to: 0 }

end
