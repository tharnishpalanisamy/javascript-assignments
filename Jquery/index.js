// // function fontChange(){
// //     $(".para").css('font-style','italic')
// // }

// // $(".para:odd").dialog('1000')
// // $("#btn1").click(function(){
// //     $(".para:odd").Dialog('1000')
// // })

// // let name = $(".p").text()

// $("#btn1").click(function(){
//     $(".p").animate({
//         opacity:'0.5',
//         left:'250px' ,
//         fontSize : '25px',
//     }
//     ,1000 , function(){
//             alert("Animation")
//         })

//     $(".p").after("<span>Hiii</span>")
//     $(".p").toggleClass("redColor")
// })


$(document).ready(function(){
    $("#form").validate({
        rules:{
            email:{
                email:true , 
                required:true 
            } , 
            password:{
                minlength:8 , 
                required:true 
            }
        } , 
        messages:{
            email:"Enter Valid email " , 
            password:"enter valid password " 
        } , 
        submitHandler:function(form) {
            alert("successful")
            form.submit();
        }

    })
})