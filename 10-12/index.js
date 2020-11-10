$(function() {
    var container = $('.slideshow'),
        slideGroup = container.find('.slideshow_slide'),
        slides = slideGroup.find('a'),
        nav = container.find('.slideshow_nav'),
        indicator = container.find('.indicator'),
        slideConut = slides.length,
        indicatorhtml = '',
        currentindex = 0,
        durtion = 500,
        easing = 'easeInOutExpo',
        interval = 4000,
        timer;

        //슬라이드를 가로로 배열
        console.log(slides);

        slides.each(function(i){
            let newleft = i * 100 + '%';
            $(this).css({left: newleft});

            indicatorhtml = '<a href="">' + (i+1) + '</a>';
            console.log(indicatorhtml);
        });
});