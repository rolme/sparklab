class ConsultationsController < ApplicationController
  def create
    @consultation = Consultation.new(consultation_params)
    if @consultation.save
      render :show
    else
      render json: { status: 'error', message: @consultation.errors.full_messages.join(', ') }
    end
  end

  def index
    @consultations = Consultation.all
  end

  def show
    @consultation = Consultation.find_by(slug: params[:slug])
  end

protected

  def consultation_params
    params.require(:consultation).permit(:capital, :email, :location, :name , :notes, :status)
  end
end
