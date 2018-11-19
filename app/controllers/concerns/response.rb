# Responds with a JSON and a HTTP status code
module Response
  def json_response(object, status = :ok)
    render json: object, status: status
  end
end
