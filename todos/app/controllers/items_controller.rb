class ItemsController < ApplicationController
	def index

	end

	def new
		@item = Item.new
	end

	def create
		@item = Item.new(items_attributes)
		if @item.save
			redirect_to items_path, notice: 'Successfully saved todo item.'
		else
			render 'new'
		end
	end

	private

	def items_attributes
		params.require(:item).permit(:name)
	end
end