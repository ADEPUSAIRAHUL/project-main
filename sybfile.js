
//corosel img
i=0
let a=["https://theluxuryeditor.com/wp-content/uploads/2020/01/198589995.jpg","https://wallpapercave.com/wp/wp1846066.jpg","https://bonjourparis.com/wp-content/uploads/2015/05/Peninsula.jpg",//"4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg"\\
]
let data=[{heading:"Explore<br/>#Leisure For Sure",cont:"Discover 100+ hotels and Resorts across the india to relax,unwind,and reboot",button:"Learn more"},
{heading:"Unexplored Himachal",cont:"Experience Unforgettable Beauty With Serence & Show capped hills,and enchanting scenery.",button:"explore now"},
{heading:"Explore the best of,Goa",cont:"Discover Baga Condolim,Cavelossim and Panjim Form one of our hotels",button:"Book now"}
//    {heading:"Heading4",cont:"content of heading 4",button:"Learn more"},
//    {heading:"Heading5",cont:"content of heading 5",button:"Learn more"},
//    {heading:"Heading6",cont:"content of heading 6",button:"Learn more"},
//    {heading:"Heading7",cont:"content of heading 7",button:"Learn more"},
//    {heading:"Heading8",cont:"content of heading 8",button:"Learn more"},
//    {heading:"Heading9",cont:"content of heading 9",button:"Learn more"} 
]


function fun()
{
    let iref=document.getElementById("simg")
    let hrf=document.getElementById("hd")
let brf=document.getElementById("bc")
let btnn1=document.getElementById("btnn1")
let dref=document.getElementsByClassName("fa-circle")
let cl=dref[i].classList
// console.log(cl)
cl.remove("fa-solid")
cl.add('fa-regular')
dref[i].classList=cl

    i++
    if(i>=a.length)
    {
        i=0
    }
    iref.src=a[i]
    hrf.innerHTML=data[i].heading
    // brf.innerHTML=data[i].cont
    btnn1.innerHTML=data[i].button
    let cl1=dref[i].classList
cl1.remove("fa-regular")
cl1.add('fa-solid')
dref[i].classList=cl1
  
    

}
setInterval(fun,1000)




function fun1()
{
    let iref=document.getElementById("simg")
    let hrf=document.getElementById("hd")
let brf=document.getElementById("bc")
let btnn1=document.getElementById("btnn1")
let dref=document.getElementsByClassName("fa-circle")
let cl=dref[i].classList
console.log(cl)
cl.remove("fa-solid")
cl.add('fa-regular')
dref[i].classList=cl
    i--
    if(i<0)
    {
        i=a.length-1
    }
    iref.src=a[i]
    hrf.innerHTML=data[i].heading
    brf.innerHTML=data[i].cont
    btnn1.innerHTML=data[i].button
    let cl1=dref[i].classList
cl1.remove("fa-regular")
cl1.add('fa-solid')
dref[i].classList=cl1
    

}


function fun2()
{
    let iref=document.getElementById("simg")
    let hrf=document.getElementById("hd")
    let btnn1=document.getElementById("btnn1")
    let dref=document.getElementsByClassName("fa-circle")
let brf=document.getElementById("bc")
let cl=dref[i].classList
cl.remove("fa-solid")
cl.add('fa-regular')
dref[i].classList=cl
    i++
    if(i>=a.length)
    {
        i=0
    }
    iref.src=a[i]
    hrf.innerHTML=data[i].heading
    brf.innerHTML=data[i].cont
    btnn1.innerHTML=data[i].button
    let cl1=dref[i].classList
cl1.remove("fa-regular")
cl1.add('fa-solid')
dref[i].classList=cl1
    

}


function fun3(x)
{
    let iref=document.getElementById("simg")
    let hrf=document.getElementById("hd")
    let btnn1=document.getElementById("btnn1")
    let dref=document.getElementsByClassName("fa-circle")
let brf=document.getElementById("bc")
let cl=dref[i].classList
cl.remove("fa-solid")
cl.add('fa-regular')
dref[i].classList=cl
   i=x
    iref.src=a[i]
    hrf.innerHTML=data[i].heading
    brf.innerHTML=data[i].cont
    btnn1.innerHTML=data[i].button
    let cl1=dref[i].classList
cl1.remove("fa-regular")
cl1.add('fa-solid')
dref[i].classList=cl1
    

}
// subfile curosal
i=0;

function fun11(){
    let iref=document.getElementById("simg")
    let hrf=document.getElementById("hd")
    i=i++;
    if(i>=a.length){
        i=0;
    }
    iref.src=a[i]
    
}setInterval(fun11,4000)
//nav2 submanuse
//hotels

        function hotalfocus(){
            let submenu=document.getElementsByClassName("submenu")[0].style.display="block"   
        }
       function hotalleave(){
        let submenu=document.getElementsByClassName("submenu")[0].style.display="none"
        
        
    }
    
    
    
 //redison rewards   
    
        function destinationsubfocus(k){
            let destinationsub_inner=document.getElementsByClassName("destinationsub_inner")[0].style.display="block"
            
        }
       function destinationsubleave(k){
        let destinationsub_inner=document.getElementsByClassName("destinationsub_inner")[0].style.display="none"
        
        
    }
//rewards
       function rewardssubfocus(k){
        let destinationsub_inner=document.getElementsByClassName("rewardssub_inner")[0].style.display="block"
       } 
       function rewardssubleave(k){
        let destinationsub_inner=document.getElementsByClassName("rewardssub_inner")[0].style.display="none"
        
        
    }   
//deals
function dealssubfocus(k){
    let destinationsub_inner=document.getElementsByClassName("dealssub_inner")[0].style.display="block"
   } 
   function dealssubleave(k){
    let destinationsub_inner=document.getElementsByClassName("dealssub_inner")[0].style.display="none"
    
    
}
//radisson meetings
function redisson_meetingsubfocus(k){
    let destinationsub_inner=document.getElementsByClassName("redisson_meetingsub_inner")[0].style.display="block"
   } 
   function redisson_meetingsubleave(k){
    let destinationsub_inner=document.getElementsByClassName("redisson_meetingsub_inner")[0].style.display="none"
    
    
}
//experiences
function EXPERIENCESsubfocus(k){
    let destinationsub_inner=document.getElementsByClassName("EXPERIENCESsub_inner")[0].style.display="block"
   } 
   function EXPERIENCESsubleave(k){
    let destinationsub_inner=document.getElementsByClassName("EXPERIENCESsub_inner")[0].style.display="none"
    
    
}   
//digital_services
function digital_servicessubfocus(k){
    let destinationsub_inner=document.getElementsByClassName("digital_servicessub_inner")[0].style.display="block"
   } 
   function digital_servicessubleave(k){
    let destinationsub_inner=document.getElementsByClassName("digital_servicessub_inner")[0].style.display="none" 
}          
function fun211(){
    let destinationsub_inner1=document.getElementsByClassName("subfileinner2")[0].style.display="block"
    let destinationsub_inner2=document.getElementsByClassName("subfileinner2Asia")[0].style.display="none"
    let destinationsub_inner3=document.getElementsByClassName("subfileinner2europe")[0].style.display="none"
} 
function fun212(){
    let destinationsub_inner21=document.getElementsByClassName("subfileinner2")[0].style.display="none"
    let destinationsub_inner22=document.getElementsByClassName("subfileinner2Asia")[0].style.display="block"
    let destinationsub_inner23=document.getElementsByClassName("subfileinner2europe")[0].style.display="none"
} 
function fun213(){
    let destinationsub_inner31=document.getElementsByClassName("subfileinner2")[0].style.display="none"
    let destinationsub_inner32=document.getElementsByClassName("subfileinner2Asia")[0].style.display="none"
     let destinationsub_inner33=document.getElementsByClassName("subfileinner2europe")[0].style.display="block"
} 
// sai inner divisen none
   function innersai1(k){
    let destinationsub_inner=document.getElementById("sai").style.display="none" ;
} 
//sai inner desply block    
function innersai2(k){
    let destinationsub_inner=document.getElementById("sai").style.display="block" ;
}