var tandeciarz = (function($,document, window){

    'use strict';
    
	var docElem = document.documentElement,
		wh,
		galleryClass = '.trek-gallery',
		imagePopupClass = '.trek-image-popup';
        
        return {
            /* gallery config - http://owlgraphic.com/owlcarousel/#customizing*/
            owlCarousell: function() {
                if($(galleryClass).length) {
                    $(galleryClass).each(function() {
                        $(this).owlCarousel({
                            autoPlay: 5000,
                            stopOnHover: true,
                            itemsScaleUp: true,
                            items: 1
                        });
                    });
                }
            },
            /* image popup config - http://dimsemenov.com/plugins/magnific-popup/documentation.html*/
            magnificPopup: function() {
                if($(imagePopupClass).length) {
                    $(imagePopupClass).magnificPopup({
                        type: 'image',
                        removalDelay: 500,
                        midClick: true,
                        callbacks: {
                            beforeOpen: function() {
                                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                                this.st.mainClass = 'mfp-zoom-in';
                                /* other css animations: http://codepen.io/dimsemenov/pen/GAIkt */
                            },
                            open: function() {
                                $('html').css('margin-right', '0');
                            },
                        },
                        closeOnContentClick: true,
                        gallery:{
                            enabled: true
                        }
                    });
                }
            }
        }
})(jQuery, document, window);
(function() {

    'use strict';
    tandeciarz.owlCarousell();
    tandeciarz.magnificPopup();

})();