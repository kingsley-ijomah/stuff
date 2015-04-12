class ItemsController < ApplicationController
	def index
	end

	def new
		@item = Item.new
	end

	def create
		@item = Item.new(item_attributes)
		if @item.save
			redirect_to items_path
		else
			render 'new'
		end
	end

	private

	def item_attributes
		params.require(:item).permit(:name)
	end
end