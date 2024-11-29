
.PHONY: test

test:
	npm run build
	npx nestarch generate --path ./test/fixtures/simple-app --output diagram.puml
