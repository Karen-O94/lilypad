start:
	docker run --rm -d -p 5000:5000 libretranslate
	docker run --rm -d -p 5001:8080 restcountries
	npm start
build:
	rm -rf dist
	mkdir -p dist
	git clone https://github.com/LibreTranslate/LibreTranslate.git dist/libretranslate
	git clone https://gitlab.com/restcountries/restcountries.git dist/restcountries
	# cd dist/libretranslate && \
	# docker build -f docker/Dockerfile --build-arg with_models=true -t libretranslate .
	cd dist/restcountries && \
		if [ $(uname -m) == 'arm64' ]; then \
			sed -i 's/FROM openjdk:17-alpine/FROM openjdk:21-ea-17-slim-buster/g' Dockerfile \
			docker buildx build --platform linux/arm64/v8 . --load; \
		else \
			docker build -t restcountries .; \
		fi
