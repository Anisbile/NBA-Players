$(function(){
    const BASE_URL = 'https://www.balldontlie.io';
    

    
    let playerData;
    
    const $first_name = $('#first'); 
    const $last_name= $('#last');
    const $position = $('#position');
    const $form = $('form'); 
    const $input = $('input[type="text"]');
    
    $form.on('submit', handleGetData)
    

    function handleGetData(event) {
        event.preventDefault(); 
        const playerTitle = $input.val();
        $input.val("");
        $.ajax(`${BASE_URL}/api/v1/players/${playerTitle}`).then(function (data) {
            playerData = data;
            render();
            console.log(playerData)
        }, function (error) {
            console.log(error);
        });
    }
    
    
    function render() {
        $first_name.text(playerData.first_name);
        $last_name.text(playerData.last_name);
        $position.text(playerData.position);
    }
    
        
    });