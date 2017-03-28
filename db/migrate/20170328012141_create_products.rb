class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :sku
      t.decimal :price, :precision => 9, :scale => 2
      t.integer :available
      t.references :year, foreign_key: true
      t.references :category, foreign_key: true
      t.text :description

      t.timestamps
    end
  end
end
