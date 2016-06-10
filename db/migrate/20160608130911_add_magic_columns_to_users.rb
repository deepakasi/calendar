class AddMagicColumnsToUsers < ActiveRecord::Migration
  def change
  	add_column :users, :login_count, :integer, :null => false, :default => 0
  	add_column :users, :failed_count, :integer, :null =>false, :default => 0
  end
end

