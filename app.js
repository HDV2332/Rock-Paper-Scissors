const game = ()=>{
    let pscore = 0
    let cscore = 0

    //khởi tạo game
    const startGame = ()=>{
        const playBtn = document.querySelector(".intro button")
        const introScreen = document.querySelector(".intro")
        const match = document.querySelector(".match")

        playBtn.addEventListener("click",()=>{
            introScreen.classList.add("fadeOut")
            match.classList.add("fadeIn")
        })
    }

    //Chơi game
    const playMatch = ()=>{
        const options = document.querySelectorAll(".options button")
        const playerHand = document.querySelector(".player-hand")
        const computerHand = document.querySelector(".computer-hand")
        const hands = document.querySelectorAll(".hands img")

        hands.forEach(hands=>{
            hands.addEventListener("animationend",function(){
                this.style.animation = ""
            })
        })

        //lựa chọn của máy
        const computerOptions = ["búa","giấy","kéo"]
        options.forEach(option => {
            option.addEventListener("click",function(){
                //random cho array
                const computerNumber = Math.floor(Math.random()*3)  
                const computerChoice = computerOptions[computerNumber]

                setTimeout(()=>{                
                //gọi hàm so sánh tay
                compareHands(this.textContent,computerChoice)

                //update img
                playerHand.src = `./images/${this.textContent}.png`
                computerHand.src = `./images/${computerChoice}.png`
                },2000)
     
                //gọi hiệu ứng 
                playerHand.style.animation = "shakePlayer 2s ease"
                computerHand.style.animation = "shakeComputer 2s ease"
            })
        });   
    }

    //so sánh tay
    const compareHands = (playerChoice,computerChoice)=>{
        const winner = document.querySelector(".winner")
        if(playerChoice === computerChoice){
            winner.textContent = "Hoà nhau!"
            return
        }
        if(playerChoice ==="búa"){
            if(computerChoice ==="kéo"){
                winner.textContent = "Bạn đã thắng!"
                pscore++
                updateScore()
            }else {
                winner.textContent = "Máy tính thắng mất rồi."
                cscore++ 
                updateScore()
            }
            return
        }
        if(playerChoice ==="giấy"){
            if(computerChoice ==="búa"){
                winner.textContent = "Bạn đã thắng!"
                pscore++
                updateScore()
            }else {
                winner.textContent = "Máy tính thắng mất rồi." 
                cscore++ 
                updateScore()
            }
            return
        }
        if(playerChoice ==="kéo"){
            if(computerChoice ==="giấy"){
                winner.textContent = "Bạn đã thắng!"
                pscore++
                updateScore()
            }else {
                winner.textContent = "Máy tính thắng mất rồi." 
                cscore++ 
                updateScore()
            }
            return
        }
    }

    const updateScore = ()=>{
        const playerScore = document.querySelector(".player-score p")
        const computerScore = document.querySelector(".computer-score p")
        playerScore.textContent = pscore
        computerScore.textContent = cscore
    }

    //Khởi tạo các hàm
    startGame()
    playMatch()
} 
game()

