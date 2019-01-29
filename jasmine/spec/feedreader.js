// feedreader.js
    /*  This is the spec file that Jasmine will read and contains 
        all of the tests that will be run against your application.

        "Jasmine is a behavior-driven development framework for testing 
            JavaScript code. It does not depend on any other JavaScript 
            frameworks. It does not require a DOM." Source: jasmine.github.io
    */

'use strict';

//Placing all tests within the $() function, to ensure they don't run until the DOM is ready.
$(() => {
    //RSS FEEDS/allFeeds
    //This suite is all about the RSS feeds definitions, 
    //referenced as the allFeeds variable in our application.
    describe('RSS Feeds', () => {
        //Test allFeeds variable to ensure it is defined & not empty.
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //URL LOOP
        it('URL defined', () => {
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            } 
        });

         //NAME LOOP
        it('Name defined', () => {
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });    
    });

//THE MENU
    describe('The Menu', () => {
        //DEFAULT HIDDEN
        it('menu hidden', () => {
            const body = document.querySelector('body');
            expect(body.classList.contains('menu-hidden').toBe(true));
        });
        //
        it('', () => {

        });
 
        //
        it('', () => {

        });    
    });

}());




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