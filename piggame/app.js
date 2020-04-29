var current,total,activeplayer,gameplaying,dice1,maxscore;
init();
document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gameplaying)
        {
    document.getElementById("btnn").style.display='none';
    document.getElementById("name").style.display='none';
    var dice=Math.floor(Math.random()*6)+1;
    document.querySelector('.dice').style.display ='block';
    document.querySelector('.dice').src ='imgs/dice-'+dice+'.png';
    if(dice!==1)
    {
        if(dice1 === 6 && dice === 6)
            {
                total[activeplayer]=0;
                document.querySelector('#score-'+activeplayer).textContent=total[activeplayer];
                gameplaying = false;
                dice1=0;
               setTimeout(function(){nextplayer();},700);
            }
        else
            {
        dice1=dice;
        current+=dice;
        document.querySelector('#current-'+activeplayer).textContent=current;
            }
    }
    else{
        gameplaying = false;
        setTimeout(function(){nextplayer();},700);
    }
        }
});
function nextplayer()
    {
        gameplaying = true;
        current=0;
        document.querySelector('#current-'+activeplayer).textContent=current;
        activeplayer === 0 ? activeplayer = 1 : activeplayer = 0; 
        document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';
    }
function init()
{
    total=[0,0];
    current=0;
    activeplayer=0;
    gameplaying=true;
    maxscore=100;
    document.querySelector('.dice').style.display ='none';
      document.getElementById("btnn").style.display='block';
    document.getElementById("name").style.display='block';
    document.getElementById('current-0').textContent=0;
    document.getElementById('current-1').textContent=0;
    document.getElementById('score-0').textContent=0;
    document.getElementById('score-1').textContent=0;
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.getElementById('name').value = "Maxscore";
        document.querySelector('.btn-enter').addEventListener('click',function(){

        var a=document.getElementById('name').value;
        if(a>0)
        {
            maxscore=a;
        }
        else{
            document.getElementById('name').value=100;
            setTimeout(function(){ alert("Negative digits not allowed"); }, 300);
        }
         document.getElementById("btnn").style.display='none';
         document.getElementById("name").style.display='none';
        });
}
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gameplaying)
        {
        total[activeplayer]+=current;
        document.querySelector('#score-'+activeplayer).textContent=total[activeplayer];
        
        if(total[activeplayer] >= maxscore)
            {
                gameplaying=false;
            document.querySelector('#name-' + activeplayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activeplayer + '-panel').classList.remove('active');
            }
    else
        {
             if(dice1 === 6)
                {
                    dice1=0;
             }
        nextplayer();
        }
        }
});
document.querySelector('.btn-new').addEventListener('click', init);
/* nav  */