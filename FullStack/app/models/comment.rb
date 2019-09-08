class Comment < ApplicationRecord
    validates :body, presence: true
    
    belongs_to :image,
        class_name: 'Image',
        primary_key: :id,
        foreign_key: :image_id

    belongs_to :user,
        class_name: 'User',
        primary_key: :id,
        foreign_key: :user_id
end
