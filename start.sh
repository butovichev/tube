sudo apt-get -y  install nodejs
sudo apt-get -y  install npm
sudo npm install -g gulp-cli
npm install --save-dev gulp

sudo ln -s /usr/bin/nodejs /usr/bin/node

npm install gulp-sass \
	 gulp-autoprefixer \
	 gulp-cssnano \
	 gulp-jshint \
	 gulp-concat \
	 gulp-uglify \
	 gulp-imagemin \
	 gulp-notify \
	 gulp-rename \
	 gulp-livereload \
	 gulp-cache del \
	 --save-dev 
	 
