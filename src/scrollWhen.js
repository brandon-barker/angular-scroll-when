(function () {
  'use strict';

  angular.module('bb.scrollWhen', []);

  angular.module('bb.scrollWhen').directive('scrollWhen', scrollWhen);

  scrollWhen.$inject = ['$timeout'];

  function scrollWhen($timeout) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var scrollWatchEnabled = (attrs.scrollWatchEnabled === 'true');

        // Do the initial check to scroll (this will be hit on state change/page load)
        $timeout(function () {
          evalScroll();
        }, 0);

        // Enable this to add watchers to the items so that when the expression evaluates to true it will scroll to your item
        if (scrollWatchEnabled) {
          scope.$watch(attrs.scrollWhen, function(newVal, oldVal) {
            if (newVal !== oldVal) {
              evalScroll();
            }
          });
        }

        // Evaluate the expression and scroll if we need to
        function evalScroll() {
          if (scope.$eval(attrs.scrollWhen)) {
            var scrollContainer = attrs.scrollContainer || 'body';
            var scrollSpeed = attrs.scrollSpeed || 500;
            var scrollOffset = attrs.scrollOffset || 600;

            var $element = $(scrollContainer);
            var scrollPos = element[0].offsetTop - scrollOffset;

            doScroll($element, scrollPos, scrollSpeed);
          }
        }

        // Scroll to the element
        function doScroll($element, scrollPos, scrollSpeed) {
          $element.animate({
            scrollTop : scrollPos
          }, scrollSpeed);
        }
      }
    }
  }
})();
