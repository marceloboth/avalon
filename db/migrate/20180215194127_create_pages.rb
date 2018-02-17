class CreatePages < ActiveRecord::Migration[5.1]
  def change
    create_table :pages do |t|
      t.string :title
      t.string :slug
      t.text :body
      t.boolean :publicated

      t.timestamps
    end
  end
end
