require 'rails_helper'

describe ItemsController do 
	describe 'Get #new' do 
		it 'assigns Item to @item' do
			item = double('item')
			allow(Item).to receive(:new).and_return(item)

			get 'new'

			expect(Item).to have_received(:new)
			expect(assigns[:item]).to eq(item)
		end
	end

	describe 'Post #create' do 
		it 'it redirects to :items' do 
			item = double('item')
			allow(Item).to receive(:new).and_return(item)
			allow(item).to receive(:save).and_return(true)

			post 'create', item: {name: 'hello world!'}

			expect(assigns[:item]).to eq(item)
			expect(item).to have_received(:save)
			expect(response).to redirect_to items_path
		end
	end
end