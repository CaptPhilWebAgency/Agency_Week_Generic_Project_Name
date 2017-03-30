class ChangeProductColumnProductToName < ActiveRecord::Migration[5.0]
  def change
    rename_column :products, :product, :name
  end
end
