require 'rails_helper'

feature 'User creation' do
	scenario 'with valid data' do
		visit new_item_path
		fill_in 'name', with: 'first item'
		click_button 'Save Item'
		expect(page).to have_content('Successfully saved todo item.')
	end
end