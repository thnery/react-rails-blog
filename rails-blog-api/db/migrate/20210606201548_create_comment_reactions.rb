class CreateCommentReactions < ActiveRecord::Migration[6.1]
  def change
    create_table :comment_reactions do |t|
      t.string :reaction, null: false
      t.integer :comment_id, index: true
      t.integer :user_id, index: true

      t.timestamps
    end
  end
end
