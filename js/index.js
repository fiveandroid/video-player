const video = document.querySelector('#video')
        const play = document.querySelector('#play')
        const pause = document.querySelector('#pause')
        const backward = document.querySelector('#backward')
        const forward = document.querySelector('#forward')
        const progreso = document.querySelector('#progress')

        play.addEventListener('click',handlePlay )
        pause.addEventListener('click',handlePause )
        backward.addEventListener('click',handleBackward )
        forward.addEventListener('click',handleForward )
        video.addEventListener('loadmetadata', handleLoaded )
        video.addEventListener('timeupdate', handleTimeUpdate )
        progreso.addEventListener('input', handleInput )

        function handlePlay(){
            console.log("Se presiono play")
            video.play()
            play.hidden = true
            pause.hidden = false
        }

        function handlePause(){
            console.log("Se presiono pause")
            video.pause()
            play.hidden = false
            pause.hidden = true


        }

        function handleBackward(){
            console.log("Se presiono Backward")
            video.currentTime = video.currentTime - 10 
          
        }

        function handleForward(){
            console.log("Se presiono Forward")
            video.currentTime = video.currentTime + 10 

        }

        function handleLoaded(){
            console.log("Ha cargado el video")

            progreso.max =   video.duration
        }

        function handleTimeUpdate(){
            console.log("eit")

            progreso.value = video.currentTime
        }

        function handleInput(){
            console.log("eit")
            video.currentTime = progreso.value

        }
