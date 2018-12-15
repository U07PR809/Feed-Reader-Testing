/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(
	(function() {
		/* This is our first test suite - a test suite just contains
		 * a related set of tests. This suite is all about the RSS
		 * feeds definitions, the allFeeds variable in our application.
		 */
		describe("RSS Feeds", function() {
			/* This is our first test - it tests to make sure that the
			 * allFeeds variable has been defined and that it is not
			 * empty. Experiment with this before you get started on
			 * the rest of this project. What happens when you change
			 * allFeeds in app.js to be an empty array and refresh the
			 * page?
			 */
			it("are defined", function() {
				expect(allFeeds).toBeDefined();
				expect(allFeeds.length).not.toBe(0);
			});

			/* DONE: Test loops through each feed in the
			 * allFeeds object and ensures it has a URL
			 * defined and that the URL is not empty.
			 */

			it('each feed should have a "url" property defined which is a non-empty string', function() {
				allFeeds.forEach(aFeed => {
					const url = aFeed.url;

					expect(url).toBeDefined();
					expect(typeof url).toBe("string");
					expect(url.length).toBeGreaterThan(0);
					expect(url).toMatch(/^(http|https):\/\//);
				});
			});

			/* DONE: Test loops through each feed in the
			 * allFeeds object and ensures it has a name
			 * defined and that the name is not empty.
			 */

			it('each feed should have a "name" property defined which is a non-empty string', function() {
				allFeeds.forEach(aFeed => {
					const name = aFeed.name;

					expect(name).toBeDefined();
					expect(typeof name).toBe("string");
					expect(name.length).toBeGreaterThan(0);
				});
			});
		});

		/* DONE: A new test suite named "The menu" */

		describe("The Menu", function() {
			/* DONE: Test ensures that the menu element is hidden
			 * by default. Analyze the HTML and the CSS to determine
			 * the hiding/showing of the menu element.
			 */

			let body;
			beforeEach(() => {
				body = document.querySelector("body");
			});

			it("should be hidden by default", function() {
				expect(body.hasAttribute("class")).toBe(true);
				expect(body.classList).toContain("menu-hidden");
			});

			/* DONE: Test ensures that the menu changes visibility
			 * when the menu icon is clicked. This test checks
			 * two expectations: does the menu display when clicked
			 * and does it hide when clicked again.
			 */

			it("toggles visibility when the menu icon is clicked", function() {
				const menuIcon = document.querySelector(".menu-icon-link");

				function isMenuHidden() {
					return body.classList.contains("menu-hidden");
				}

				menuIcon.click();
				expect(isMenuHidden()).toBe(false);

				menuIcon.click();
				expect(isMenuHidden()).toBe(true);
			});
		});

		/* DONE: A new test suite named "Initial Entries" */

		describe("Initial Entries", function() {
			/* DONE: Test ensures that when the loadFeed function is
			 * called and completes its work, there is at least a single
			 * .entry element within the .feed container.
			 * Since, loadFeed() is asynchronous so this test requires
			 * the use of Jasmine's beforeEach and asynchronous done() function.
			 */

			beforeEach(done => loadFeed(0, done));

			it("should have atleast a single feed", function() {
				const feedList = document.querySelectorAll(".feed .entry");
				expect(feedList.length).toBeGreaterThan(0);
			});
		});

		/* DONE: A new test suite named "New Feed Selection" */

		describe("New Feed Selection", function() {
			/* DONE: Test ensures that when a new feed is loaded
			 * loadFeed function checks that the content changes.
			 * Remember, loadFeed() is asynchronous.
			 */
			let feedOne, feedTwo;

			beforeEach(done => {
				loadFeed(0, () => {
					feedOne = document.querySelector(".feed")
						.innerText;
					done();

					loadFeed(1, () => {
						feedTwo = document.querySelector(".feed")
							.innerText;
						done();
					});
				});
			});

			it("should load feed with a new content", function() {
				expect(feedOne).not.toEqual(feedTwo);
			});
		});
	})()
);
