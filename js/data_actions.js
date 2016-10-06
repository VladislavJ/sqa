(function($, window){
    var BrooksTheme = window.BrooksTheme || {};

    BrooksTheme.DataActions = function(){
        var dataToogleClass = function () {
            var $elements = $('[data-toogle="class"]')

            $elements.click(function () {
                var $this = $(this),
                    toogleClass = $this.data('class') || 'active',
                    $target = $($this.data('target')),
                    targetClass = $this.data('target-class') || $target.data('class') || 'active';

                $this.toggleClass(toogleClass);
                $target.toggleClass(targetClass);
            });

            return $elements;
        }

        var dataMoveNext = function () {
            var $elements = $('[data-move="next"]');

            $elements.click(function () {
                var $this = $(this),
                    $moveTo = $this.parent().next();

                TweenMax.to($(window), .6, {
                    scrollTo: {
                        y: $moveTo.offset().top
                    },
                    ease: Power1.easeOut
                });
            });

            return $elements;
        }

        var dataShare = function () {
            var $elements = $('[data-share]');

            var share = {
                twitter: function() {
                    window.open('http://twitter.com/intent/tweet?text=' + jQuery("h2.text-title").text() + ' ' + window.location,
                        "twitterWindow",
                        "width=650,height=350");
                    return false;
                },

                // Facebook

                facebook: function(){
                    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(location.href),
                        'facebookWindow',
                        'width=650,height=350');
                    return false;
                },

                // Pinterest

                pinterest: function(){
                    window.open('http://pinterest.com/pin/create/bookmarklet/?description=' + jQuery("h2.text-title").text() + ' ' + encodeURIComponent(location.href),
                        'pinterestWindow',
                        'width=750,height=430, resizable=1');
                    return false;
                },

                // Google Plus

                google: function(){
                    window.open('https://plus.google.com/share?url=' + encodeURIComponent(location.href),
                        'googleWindow',
                        'width=500,height=500');
                    return false;
                },

                // Linkedin

                linkedin: function(){
                    window.open('http://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(location.href) + '&title=' + jQuery("h1").text(),
                        'linkedinWindow',
                        'width=650,height=450, resizable=1');
                    return false;
                }
            }

            $elements.click(function (event) {
                event.preventDefault();
                var $this = $(this);

                share[$this.data('share')].call();

            });

            return $elements;
        }

        return {
            dataToogleClass: dataToogleClass(),
            dataMoveNext: dataMoveNext(),
            dataShare: dataShare()
        }
    }

    $(document).ready(function(){
        new BrooksTheme.DataActions;
    });

})(jQuery, window);
