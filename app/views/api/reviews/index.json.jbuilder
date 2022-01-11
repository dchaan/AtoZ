@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :title, :body, :rating, :user_id, :product_id, :created_at
    json.extract! review.user, :first_name
  end
end