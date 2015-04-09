require 'rails_helper'

describe Item do
	it 'requires name field to be valid' do
		item = Item.create({name: nil})
		expect(item).to_not be_valid
		expect(item.errors[:name].size).to eq(1)
	end
end