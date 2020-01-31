class Game < ApplicationRecord
  validates_uniqueness_of :name

  has_one_attached :icon
end
