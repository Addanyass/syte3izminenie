const offcanvasCartE1 = document.getElementById('offcanvasCart');
const offcanvasCart = new bootstrap.Offcanvas(offcanvasCartE1);

document.querySelectorAll('.closecart').forEach(item => {
    item.addEventListener('click', (e)=>{
        e.preventDefault();
        offcanvasCart.hide();

        let href = item.href.split('#').pop();

        offcanvasCartE1.addEventListener('hidden.bs.offcanvas', ()=> {
            document.getElementById(href).sctollIntoView();
        })
    })
})





$(document).ready(function(){
    //Вот отсюда
    $(window).scroll(function () {
        if($(this).scrollTop() > 300) {
            $('#top').fadeIn();
        }

        else {
            $('#top').fadeOut();
        }
    });
        
    $('#top').click(function() {
        $('html, body').animate({ scrollTop: 0}, 500);
        return false;
    });
    
    //До сюда
    $(".owl-carousel-full").owlCarousel({
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            700: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
  });