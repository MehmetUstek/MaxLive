#!/bin/bash

# check if image exist
function check_image {
  IMAGE_NAME=$1
  if [[ "$(docker images -q $IMAGE_NAME 2> /dev/null)" == "" ]]; then
    echo "image $IMAGE_NAME not exists, building..."
    docker build -t $IMAGE_NAME ./$IMAGE_NAME
  else
    echo "image $IMAGE_NAME exists, skip build"
  fi
}

# check if serve running
function check_running {
  SERVICE_NAME=$1
  if [[ "$(docker ps -q --filter name=$SERVICE_NAME 2> /dev/null)" == "" ]]; then
    echo "container $SERVICE_NAME not running, starting..."
    docker run -d -p $2:3000 $SERVICE_NAME
  else
    echo "container $SERVICE_NAME already running, skip"
  fi
}

check_image "dropdatabase233/account_service"
check_image "dropdatabase233/analytics_service"
check_image "dropdatabase233/authentication_service"
check_image "dropdatabase233/authorization_service"
check_image "dropdatabase233/content_storage_service"
check_image "dropdatabase233/payment_gateway_service"
check_image "dropdatabase233/payment_service"
check_image "dropdatabase233/personalization_service"
check_image "dropdatabase233/rating_service"
check_image "dropdatabase233/stream_service"
check_image "dropdatabase233/subscription_service"
check_image "dropdatabase233/upload_service"

check_running "account_service" 8000
check_running "analytics_service" 3000
check_running "authentication_service" 3001
check_running "authorization_service" 3002
check_running "content_storage_service" 3003
check_running "payment_gateway_service" 3004
check_running "payment_service" 3005
check_running "personalization_service" 3006
check_running "rating_service" 3007
check_running "stream_service" 3008
check_running "subscription_service" 3009
check_running "upload_service" 3010