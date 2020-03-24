target package:
	@echo 🖌️ Painting Mercury…
	npm run build
	cp LICENSE pkg/.
	cp package.json pkg/.
	cp README.md pkg/.
	npm run clean-package-json
