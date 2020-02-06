install:
	npm install

node_modules:
	npm install

one-test-serially: node_modules
	npx codeceptjs run ./tests/testHomepageLoad1.js --steps
	# Expectation: Only the scenarios in this test file are run, in series
	# Result: Pass

one-test-multiple-workers: node_modules
	npx codeceptjs run-workers 3 ./tests/testHomepageLoad1.js
	# Expectation: The scenarios in this file are split amongst the 3 workers
	# Result: ALL of the tests and feature files are run, and multiple times to boot
	# 		  Also, this is what is displayed for results:  FAIL  | 30 passed, -18 failed

clean:
	rm -rf ./node_modules
	rm -rf ./output
