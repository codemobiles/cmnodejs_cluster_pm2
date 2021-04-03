# standalone
pm2 start app.js

# cluster
pm2 start app.js -i 3
pm2 scale app +3
pm2 scale app 3