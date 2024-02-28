					BACK-END
Create database model:
	### npx sequelize-cli db:migrate
Seeder file:
	### npx sequelize-cli db:seed:all
Run server:
	### npm start

Insert data
INSERT INTO SHOES (SHOES.image,SHOES.name, SHOES.description, SHOES.price, SHOES.color) values ('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png','Nike Air Zoom Pegasus 36','Tc', 108.97, '#e1e7ed'); 

INSERT INTO SHOES (SHOES.image,SHOES.name, SHOES.description, SHOES.price, SHOES.color) values ('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-shield-mens-running-shoe-24FBGb__1_-removebg-preview.png','Nike Air Zoom Pegasus 36 Shield','The Nike Air Zoom Pegasus 36 Shield gets updated to conquer wet routes. A water-repellent upper combines with an outsole that helps create grip on wet surfaces, letting you run in confidence despite the weather.', 89.97, '#4D317F');
 
INSERT INTO SHOES (SHOES.image,SHOES.name, SHOES.description, SHOES.price, SHOES.color) values ('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/cruzrone-unisex-shoe-T2rRwS-removebg-preview.png','Nike CruzrOne','Designed for steady, easy-paced movement, the Nike CruzrOne keeps you going. Its rocker-shaped sole and plush, lightweight cushioning let you move naturally and comfortably. The padded collar is lined with soft wool, adding luxury to every step, while mesh details let your foot breathe. There’s no finish line—there’s only you, one step after the next.', 100.97, '#E8D026');
 
INSERT INTO SHOES (SHOES.image,SHOES.name, SHOES.description, SHOES.price, SHOES.color) values ('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/epic-react-flyknit-2-mens-running-shoe-2S0Cn1-removebg-preview.png','Nike Epic React Flyknit 2','The Nike Epic React Flyknit 2 takes a step up from its predecessor with smooth, lightweight performance and a bold look. An updated Flyknit upper conforms to your foot with a minimal, supportive design. Underfoot, durable Nike React technology defies the odds by being both soft and responsive, for comfort that lasts as long as you can run.', 89.97, '#FD584A'); 



---------------------------------------------
					FRONT-END
Set up enviroment NodeJS:
	### nvm use 14.17.0 
Download file:
	### npm install
Run client:
	### npm start