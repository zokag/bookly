$(document).ready(function(){
    // Hover efekat za .logo
    $('.logo').hover(function(){
        $(this).css('color', 'rgb(34, 85, 129)');
    }, function(){
        $(this).css('color', '#000');
    });

    // Hover efekat za .search-form label
    $('.search-form label').hover(function(){
        $(this).css('color', 'rgb(34, 85, 129)');
    }, function(){
        $(this).css('color', '#000');
    });

    // Hover efekat za .icons i, .icons div
    $('.icons i, .icons div').hover(function(){
        $(this).css('color', 'rgb(34, 85, 129)');
    }, function(){
        $(this).css('color', '#000');
    });
    
    $(document).ready(function(){
        $('.navbar a').hover(function(){
            $(this).css('background', 'var(--hover)');
        }, function(){
            $(this).css('background', 'initial'); 
        });
    });


    $('input[type="submit"]').hover(function(){
        $(this).css({
            'background-color': 'var(--hover)',
            'color': '#fff'
        });
    }, function(){
        $(this).css({
            'background-color': 'var(--blue)',
            'color': '#fff'
        });
    });
    $(document).ready(function(){
        $('.btn2').hover(function(){
            $(this).css({
                'padding': '1rem 2rem',
                'background-color': 'var(--hover)',
                'font-size': '1.1rem'
            });
        }, function(){
            $(this).css({
                'padding': '', 
                'background-color': '', 
                'font-size': '' 
            });
        });
    });

    $(document).ready(function(){
        // Dodavanje hover efekata za .block
        $('.block').hover(function(){
            $(this).css({
                'border-radius': '5%',
                'box-shadow': 'var(--box-shadow)',
                'background-color': 'rgb(235, 244, 255)'
            });
        }, function(){
            $(this).css({
                'border-radius': '', 
                'box-shadow': '',
                'background-color': ''
            });
        });
    });

$(document).ready(function(){
    // Dodavanje hover efekata za .featured-slider .box
    $('.featured-slider .box').hover(function(){
        $(this).css('border', 'var(--border-hover)');
    }, function(){
        $(this).css('border', ''); 
    });
});

$(document).ready(function(){
    // Dodavanje hover efekata za .btn3
    $('.btn3').hover(function(){
        $(this).css('background-color', 'var(--hover)');
    }, function(){
        $(this).css('background-color', ''); 
    });
});
$(document).ready(function(){
    // Dodavanje hover efekata za .btn3
    $('#login-btn').hover(function(){
        $(this).css('background-color', 'var(--hover)');
    }, function(){
        $(this).css('background-color', ''); 
    });
});
$(document).ready(function(){
    $('.footer-nav li a').hover(function(){
        $(this).css('background-color', 'var(--hover)');
    }, function(){
        $(this).css('background-color', ''); 
    });
});
$(document).ready(function(){
    $('.logo-futer a').hover(function(){
        $(this).css('background-color', 'var(--hover)');
    }, function(){
        $(this).css('background-color', ''); 
    });
});
$(document).ready(function(){
    $('#socialIcons i').hover(function(){
        $(this).css('background-color', 'var(--hover)');
    }, function(){
        $(this).css('background-color', ''); 
    });
});

$(document).ready(function(){
    $('.featured-slider .box').hover(function(){
        $(this).find('.icons').css('transform', 'translateY(0%)');
        $(this).find('.image').css('transform', 'translateY(4rem)');
    }, function(){
        $(this).find('.icons').css('transform', '');
        $(this).find('.image').css('transform', '');
    });
    $('.featured-slider .box .icons a').hover(function(){
        $(this).css({
            'background': 'var(--blue)',
            'color': '#fff'
        });
    }, function(){
        $(this).css({
            'background': '',
            'color': ''
        });
    });
});
$(document).ready(function() {
    var images = [
      'assets/img/about.jpg',
      'assets/img/about2.jpg',
      'assets/img/about3.jpg'
    ];


    var slider = $('.slider');
    $.each(images, function(index, image) {
        var slide = '<div><img src="' + image + '" alt="Slide ' + (index + 1) + '"></div>';
        slider.append(slide);
    });
    $(document).ready(function(){
        $('.slider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        });
      });
    
  });
});

