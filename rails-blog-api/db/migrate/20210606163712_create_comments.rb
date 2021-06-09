class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :content
      t.integer :post_id, index: true
      t.integer :author_id, index: true

      t.timestamps
    end
  end
end
