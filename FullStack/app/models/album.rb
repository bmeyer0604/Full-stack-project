class Album < ApplicationRecord
    validates :title, presence: true
    
    has_many_attached :images
        
    has_many :comments
    
    belongs_to :user,
        class_name: 'User',
        primary_key: :id,
        foreign_key: :user_id
end
