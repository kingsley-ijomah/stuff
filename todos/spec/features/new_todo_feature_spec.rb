require 'rails_helper'

feature 'Creating new todo list' do
	scenario 'valid create' do
		visit new_item_path
		fill_in 'item', with: 'first item in list'
		click_button 'Save Item'
		expect(page).to have_content('Item successfully saved.')
	end
end