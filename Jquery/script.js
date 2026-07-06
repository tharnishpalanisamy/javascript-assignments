$(document).ready(function(){
    console.log('ready');
    
    //form 
    $('#myForm').validate({
        rules:{
            name:{
                required:true , 
                minlength:5
            } , 
            email:{
                required:true , 
                email:true 
            } , 
            password:{
                required : true , 
                minlength : 8  
            } , 
            confirmPassword : {
                required : true , 
                equalTo:'#password'
            }
        } , 
        messages :{
            name:{
                required : 'Name is Required '
            }  , 
            email:{ 
                required : 'Email is Required' , 
                email: 'Email FOrmat is wrong' 
            } , 
            password : {
                required : 'Password is required' , 
                minlength : 'Password should be atleast 8 characters long ' 
            } , 
            confirmPassword : {
                required: 'Fonfirm your password' , 
                equalTo : 'Passwords does not match'
            }
        } , 
        submitHandler:function(form){
            console.log('form is valid');
            
        } , 
        highlight: function(element) {
        $(element).css("border", "2px solid red");
    } , 
    unhighlight: function(element) {
        $(element).css("border", "2px solid green");
    }
    })

})