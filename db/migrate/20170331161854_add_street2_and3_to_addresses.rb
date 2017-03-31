class AddStreet2And3ToAddresses < ActiveRecord::Migration[5.0]
  def change
    add_column :addresses, :street2, :string, required: false
    add_column :addresses, :street3, :string, required: false
  end
end
