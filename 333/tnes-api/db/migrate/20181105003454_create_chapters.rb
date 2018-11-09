class CreateChapters < ActiveRecord::Migration[5.0]
  def change
    create_table :chapters do |t|
      t.text :text
      t.string :author_id
      t.integer :story_id

      t.timestamps
    end
  end
end
