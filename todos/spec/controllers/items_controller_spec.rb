require 'rails_helper'

describe ItemsController do
	describe 'Get #new' do
		it 'assigns new Item to @item' do
			get 'new'
			expect(assigns[:item]).to be_an_instance_of Item
		end
	end

	describe 'Post #create' do
		context 'valid data' do
			it 'redirects to :index' do
				param = {name: 'Write my first post'}
				post 'create', item: param
				expect(response).to redirect_to items_path
			end
		end

		context 'invalid data' do
			it 'renders new' do
				param = {name: nil}
				post 'create', item: param
				expect(response).to render_template 'new'
			end
		end
	end
end