class Album < ApplicationRecord
    validates :url, :title
    
    has_many :images,
        class_name: 'Image',
        primary_key: :id,
        foreign_key: :album_id
    
    belongs_to :user,
        class_name: 'User',
        primary_key: :id,
        foreign_key: :user_id
end
