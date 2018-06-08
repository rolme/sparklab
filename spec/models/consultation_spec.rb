require 'rails_helper'

RSpec.describe Consultation, type: :model do
  subject { FactoryBot.create(:consultation) }

  it 'invalidates with wrong email format' do
    expect {
      FactoryBot.create(:consultation, email: 'echo-delta.com')
    }.to raise_error(ActiveRecord::RecordInvalid)
  end

  it 'validates uniqueness of email' do
    expect {
      FactoryBot.create(:consultation, email: subject.email)
    }.to raise_error(ActiveRecord::RecordInvalid)
  end
end
