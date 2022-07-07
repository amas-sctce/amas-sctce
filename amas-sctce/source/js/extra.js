// $(".option").click(function(){
//     $(".option").removeClass("active");
//     $(this).addClass("active");
    
//  });


//Contact_page with umage
document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});
