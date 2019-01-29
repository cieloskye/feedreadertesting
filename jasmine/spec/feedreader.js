// feedreader.js
'use strict';

/*
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/*  Jasmine is a behavior-driven development framework for testing JavaScript code. 
 *  It does not depend on any other JavaScript frameworks. It does not require a DOM. 
 *  And it has a clean, obvious syntax so that you can easily write tests. 
 *      Source: jasmine.github.io
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */




/* RSS Feeds/allFeeds
 *  This suite is all about the RSS feeds definitions, 
 *  referenced as the allFeeds variable in our application.
 */
$(function() {

    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //URL LOOP
        it('URL Defined', () => {
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
            
        })

    
         //OJECT NAME LOOP
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */ 
          it('Name Defined', () => {
            expect().toBeDefined();
        })
        
    });

//MENU

    /* TODO: Write a new test suite named "The menu" */

        //DEFAULT HIDDEN
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         //CLICK FUNCTIONALITY 
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.

https://jasmine.github.io/tutorials/async   
beforeEach(function(done) {
    setTimeout(function() {
         // do some stuff
        done();
    }, 100);
});


beforeEach(async function() {
  await someLongFunction();
});

beforeEach(function() {
  return new Promise(function(resolve, reject) {
    // do some stuff
    resolve();
  });
});


         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
