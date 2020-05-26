FBInstant.initializeAsync().then(function(game) {
    console.log('game is loaded!');
    FBInstant.setLoadingProgress(100);
    FBInstant.startGameAsync().then(function() {
        console.log('game started!');
        // Retrieving context and player information can only be done
        // once startGameAsync() resolves
        var contextId = FBInstant.context.getID();
        var contextType = FBInstant.context.getType();
        var playerName = FBInstant.player.getName();
        var playerPic = FBInstant.player.getPhoto();
        var playerId = FBInstant.player.getID();
        console.log(`uid: ${playerId}`);

        // Once startGameAsync() resolves it also means the loading view has
        // been removed and the user can see the game viewport

        game.start();
    });
});