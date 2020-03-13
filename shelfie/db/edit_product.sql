UPDATE products
SET product_name = $2, product_image = $3, product_price = $4
WHERE id = $1
RETURNING *;