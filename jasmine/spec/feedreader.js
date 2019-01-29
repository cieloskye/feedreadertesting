// feedreader.js
    /*  This is the spec file that Jasmine will read and contains 
        all of the tests that will be run against your application.

        "Jasmine is a behavior-driven development framework for testing 
            JavaScript code. It does not depend on any other JavaScript 
            frameworks. It does not require a DOM." Source: jasmine.github.io

      Special Thanks to:
        https://devhints.io/jasmine
        https://matthewcranford.com      
    */

'use strict';

//Placing all tests within the $() function, to ensure they don't run until the DOM is ready.
$(function() {
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
        it('name defined', () => {
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
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });
        
        //CLICK FUNCTIONALITY 
        it('menu click', () => {
          const body = document.querySelector('body');
          const menu = document.querySelector('.menu-icon-link');
          menu.click();
          expect(body.classList.contains('menu-hidden')).toBe(false);
          menu.click();
          expect(body.classList.contains('menu-hidden')).toBe(true);
        }); 
    });


//INITIAL ENTRIES
    describe('Initial Entries', () => {
      
      beforeEach(function(done) {
        loadFeed(0, done);
      });  
        
      it('fully loaded feed', () => {
        const feed = document.querySelector('.feed');
        expect(feed.children.lenth < 0).toBe(false); 
      });

      

    });  


//NEW FEED SELECTION
   describe('New Feed Selection', () => {
      
      const feed = $('.feed');
      let initalFeed = [];
      //const updatedFeed = [];

      beforeEach((done) => {
        loadFeed(0, () => {
          var feed = $('.feed').html();
          loadFeed(1, done);
        });
      });  
      
      it('feed updates', () => {
        expect($('.feed').html()).not.toEqual(feed);
        });
    }); 

}());



        