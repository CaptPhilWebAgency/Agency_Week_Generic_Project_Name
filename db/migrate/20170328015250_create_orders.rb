class CreateOrders < ActiveRecord::Migration[5.0]
  def change
    create_table :orders do |t|
      t.references :user, foreign_key: true
      t.references :address, foreign_key: true
      t.references :status, foreign_key: true
      t.decimal :cost, :precision => 9, :scale => 2

      t.timestamps
    end
  end
end
