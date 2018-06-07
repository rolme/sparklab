class CreateConsultations < ActiveRecord::Migration[5.2]
  def change
    create_table :consultations do |t|
      t.string :name
      t.string :email
      t.string :capital
      t.string :location
      t.string :notes
      t.string :status

      t.timestamps
    end
  end
end
