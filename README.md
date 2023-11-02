# MaxLive

```
# git clone the repository to one of the multipass manager nodes

# to start the server
docker-compose up -d

# start in docker swarm
docker stack deploy -c compose.yml maxlive
```

After the compose file complete its run, we can then see our results.<br/>
Making a call to the API Gateway and the circuit breaker: <br/>
localhost:3020 --> Circuit Breaker<br/>
localhost:3020/subscription_service --> Reaching subscription service through API Gateway<br/>

curl localhost:3020 <br/>
curl localhost:3020/subscription service

# Compose.yml

Because of our RAM restrictions, our compose file is only replicates one of the services.
