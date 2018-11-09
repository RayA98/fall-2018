json.extract! story, :id, :title, :chapters, :author_id, :is_done, :created_at, :updated_at
json.url story_url(story, format: :json)
