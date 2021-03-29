class AnimalsController < ApplicationController
  def index
    animals = Animal.all
    render json: animals
  end


  def create
  # { name: 'foo', gender: '2', species: 'Dog' }

    species = Species.find_or_create_by(name: params[:species])
    animal = Animal.create(name: params[:name], gender: params[:gender].to_i, species_id: species.id)

    render json: animal
  end
end
