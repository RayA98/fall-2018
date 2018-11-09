class CreateStories < ActiveRecord::Migration[5.0]
  def change
    create_table :stories do |t|
      t.string :title
      t.string :author_id
      t.boolean :is_done

      t.timestamps
    end
  end
end
