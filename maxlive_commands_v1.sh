sudo docker build -t dropdatabase233/account_service ./account_service
sudo docker build -t dropdatabase233/analytics_service ./analytics_service
sudo docker build -t dropdatabase233/authentication_service ./authentication_service
sudo docker build -t dropdatabase233/authorization_service ./authorization_service
sudo docker build -t dropdatabase233/content_storage_service ./content_storage_service
sudo docker build -t dropdatabase233/payment_gateway_service ./payment_gateway_service
sudo docker build -t dropdatabase233/payment_service ./payment_service
sudo docker build -t dropdatabase233/personalization_service ./personalization_service
sudo docker build -t dropdatabase233/rating_service ./rating_service
sudo docker build -t dropdatabase233/stream_service ./stream_service
sudo docker build -t dropdatabase233/subscription_service ./subscription_service
sudo docker build -t dropdatabase233/upload_service ./upload_service
sudo docker run -d -p 8000:8000 dropdatabase233/account_service 
sudo docker run -d -p 3000:3000 dropdatabase233/analytics_service 
sudo docker run -d -p 3001:3000 dropdatabase233/authentication_service 
sudo docker run -d -p 3002:3000 dropdatabase233/authorization_service 
sudo docker run -d -p 3003:3000 dropdatabase233/content_storage_service 
sudo docker run -d -p 3004:3000 dropdatabase233/payment_gateway_service 
sudo docker run -d -p 3005:3000 dropdatabase233/payment_service 
sudo docker run -d -p 3006:3000 dropdatabase233/personalization_service 
sudo docker run -d -p 3007:3000 dropdatabase233/rating_service 
sudo docker run -d -p 3008:3000 dropdatabase233/stream_service 
sudo docker run -d -p 3009:3000 dropdatabase233/subscription_service 
sudo docker run -d -p 3010:3000 dropdatabase233/upload_service