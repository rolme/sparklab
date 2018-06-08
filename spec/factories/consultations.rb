FactoryBot.define do
  factory :consultation do
    sequence(:email) { |n| "example#{n}@domain.com" }
    name "Name"
    capital "1000000"
    location "California"
    notes "This is a note"
    status "new"
  end
end
