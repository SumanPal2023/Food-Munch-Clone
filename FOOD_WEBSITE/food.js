var log=document.querySelector('.log');
var lg_hvr=document.getElementById('lg');
var crt_hvr=document.getElementById('crt_hvr');
var cart=document.querySelector('.cart');

log.addEventListener('mouseover',()=>{
    lg_hvr.innerHTML=`
    <div id="login_cnt" >
    <p class="over_cnt">Sign up</p><hr/>
    <a href="login.html"><p class="over_cnt">LogIn</p></a>
</div>
    `
})
log.addEventListener('mouseout',()=>{
    setTimeout(()=>{
       lg_hvr.innerHTML=`` 
    },2000)
})

cart.addEventListener('mouseover',()=>{
    crt_hvr.innerHTML=`  <div id="login_cnt" >
    <p class="over_cnt">My favourate</p><hr/>
    <a href="login.html"><p class="over_cnt">Order Details</p></a>
</div>`
})
cart.addEventListener('mouseout',()=>{
   setTimeout(()=>{
    crt_hvr.innerHTML=` `
   },2000)
})


addEventListener('',()=>
{
    console.log('helloo');
})
