class Image < ApplicationRecord
    validates :url, :description, presence: true

    belongs_to :album
        
    belongs_to :user,
        class_name: 'User',
        primary_key: :id,
        foreign_key: :user_id
end
