
.PHONY: test

test:
	npm run build
	npx nestarch generate --path ./example/project --output diagram.puml
