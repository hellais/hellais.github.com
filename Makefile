publish:
	yarn run build:static
	cp -R static-pages/* out/
	cp CNAME out/
	git add out && git commit -m "Update out build"
	git subtree push --prefix out origin master
