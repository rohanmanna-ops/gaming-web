let user_score=0;
let comp_score=0;

linkdict={
    rock:"big _rock _rps.jpg",
    paper:"big _paper_rps.jpg",
    scissor:"big scissor_rps.jpg"
}

let a = document.querySelectorAll('.choice') 
let res=[]
for (i of a ){
    res.push(i)

}
let msg=document.querySelector('.play')


const genCompChoice=(a)=>{
    let res=[];
    let random;
    a.forEach((ch)=>{
        res.push(ch)
    })
    ran=res[parseInt(Math.random()*3)]
    return ran.getAttribute('id')
    
}
const draw=(user_choice)=>{
    return `DRAW!!, 
    Both choose ${user_choice}`
}
const winner=(user_win,user_choice,comp_choice)=>{
    return user_win===true? `YOU WON!!, Your ${user_choice} beats ${comp_choice}`:`COMPUTER WON!!,  Computer's ${comp_choice} beats ${user_choice}`
}

const playGame=(user_choice)=>{
    let comp_choice=genCompChoice(a)
    if (comp_choice===user_choice){
        msg.innerText=draw(user_choice);
        msg.style.backgroundColor='blue'
    }
    else{
        let user_win=true
        if (user_choice==='rock'){
            user_win= comp_choice==='paper'?false:true; 
        }
        else if (user_choice==='paper'){
            user_win= comp_choice==='scissor'? false:true;
        }
        else{
            user_win=comp_choice==='rock'?false:true
        }

        msg.innerText=winner(user_win,user_choice,comp_choice)
        let z=document.querySelector('#comp_img_choice')
        let y=document.querySelector('#you_img_choice')
        z.src=linkdict[comp_choice]
        y.src=linkdict[user_choice]



        
        if(user_win===true){
            msg.style.backgroundColor='green'
            user_score++;
            document.querySelector('#you_score').innerText=user_score


        }
        else{
            msg.style.backgroundColor='red'
            comp_score++;
            document.querySelector('#comp_score').innerText=comp_score


        }
    }
}
// to play the game try to put all the codes inside 
a.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const user_choice=choice.getAttribute('id')
        playGame(user_choice)
    })
})

let mode=document.querySelector('.changemode')

mode.addEventListener('click',()=>{
    let score=document.querySelector('.scores')
    let resetscore=document.querySelector('.resetButton')


    if (document.body.style.backgroundColor==='white'){
        document.body.style.backgroundColor='black'
        score.style.color='white'
        resetscore.style.color='black'
        mode.innerText='Light mode'
        mode.style.color='black'
        mode.style.backgroundColor='white'
        resetscore.style.backgroundColor='white'
    }
    else{
        document.body.style.backgroundColor='white'
        score.style.color='black'
        mode.innerText='Dark mode'
        mode.style.color='white'
        resetscore.style.color='white'
        mode.style.backgroundColor='black'
        resetscore.style.backgroundColor='black'




    }
})

let resetscore=document.querySelector('.resetButton')


resetscore.addEventListener('click',()=>{
    user_score=0;
    document.querySelector('#you_score').innerText=user_score
    comp_score=0;
    document.querySelector('#comp_score').innerText=comp_score

});




















// for (i of  a){
//     i.addEventListener('click',()=>{
//         console.log('button clicked')
//     });
// }
// let ran1;
// let scissor=document.querySelector('#scissor')
// let rock=document.querySelector('#rock')
// let paper=document.querySelector('#paper')


// scissor.addEventListener('click',()=>{
//     ran1="scissor"
//     ran2=parseInt(Math.random(1,10)*3)

//     if (ran1==='scissor'){
//         if (res[ran2].getAttribute('id')=='rock'){
//             console.log('comp won ')
//         }
//         else if (res[ran2].getAttribute('id')=='scissor'){
//             console.log('draw')
//         }
//         else{
//             console.log('you won ')
//         }
//     }
    
// })


// rock.addEventListener('click',()=>{
//     ran1="rock"
//     ran2=parseInt(Math.random(1,10)*3)

//     if (ran1==='rock'){
//         if (res[ran2].getAttribute('id')=='rock'){
//             console.log('draw')
//         }
//         else if (res[ran2].getAttribute('id')=='scissor'){
//             console.log('you won')
//         }
//         else{
//             console.log('comp won ')
//         }
//     }
    
// })


// paper.addEventListener('click',()=>{
//     ran1="paper"
//     ran2=parseInt(Math.random(1,10)*3)

//     if (ran1==='paper'){
//         if (res[ran2].getAttribute('id')=='rock'){
//             console.log('you won ')
//         }
//         else if (res[ran2].getAttribute('id')=='scissor'){
//             console.log('comp won')
//         }
//         else{
//             console.log('draw')
//         }
//     }
    
// })


// // console.log(func(ran1))
// // // ran1=parseInt(Math.random(1,10)*3)
// // ran2=parseInt(Math.random(1,10)*3)
// // console.log(ran1,ran2)

// // if (ran1==='scissor'){
// //     if (res[ran2].getAttribute('id')=='rock'){
// //         console.log('comp won ')
// //     }
// //     else if (res[ran2].getAttribute('id')=='scissor'){
// //         console.log('draw')
// //     }
// //     else{
// //         console.log('you won ')
// //     }
// // }