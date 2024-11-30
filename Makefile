#!make

.PHONY: test

test:
	npm run build
	./bin/run.js generate --path ./test/fixtures/simple-app --output ./test/fixtures/simple-app.puml
