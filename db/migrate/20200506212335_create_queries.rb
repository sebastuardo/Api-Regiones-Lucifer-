class CreateQueries < ActiveRecord::Migration[6.0]
  def change
    create_table :queries do |t|
      t.string :comune_name
      t.string :privince_name
      t.string :comune_name

      t.timestamps
    end
  end
end
