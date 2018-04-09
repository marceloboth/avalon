class CreateMenuItems < ActiveRecord::Migration[5.1]
  def change
    create_table :menu_items do |t|
      t.string :title
      t.string :url
      t.integer :order
      t.references :menu, index: true, foreing_key: true

      t.timestamps
    end
  end
end
