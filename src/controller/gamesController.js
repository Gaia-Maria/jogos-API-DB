const GamesModel = require('../models/gamesModel')
const ConsolesModel = require('../models/consolesModel')

const findAllGames = async (req, res) =>{
    try {
    const allGames = await GamesModel.find().populate('console')
    res.status(200).json(allGames)
    }catch{
    res.status(500).json({message: error.message})
    }
};

const findGameById = async (req, res) => {
    try{
        const findGame = await GamesModel.findById(req.params.id).populate('console')
        if(findGame == null) {
            res.status(404).json({message: "Game not available"})
        }
        res.status(200).json(findGame)
    }catch (error){
        res.status(500).json({ message: error.message})
    }
};

const addNewGame = async (req, res) => {
    try{
        const {consoleId, name, developer, releaseData, genre, mode, available, description} = req.body
    
        if (!consoleId) {
            return res.status(400).json({message: 'Required: Enter the Console id.'})
        };
    
        const findConsole = await ConsolesModel.findById(consoleId)
    
        if(!findConsole) {
            return res.status(404).json({message: 'Console not found'})
        }
    
        const newGame = new GamesModel({
            console: consoleId,
            name, developer, releaseData, genre, mode, available, description
        })
        const savedGame = await newGame.save()
        res.status(200).json({message: 'New game added successfully!', savedGame})
    
        }catch (error){
            console.error(error)
            res.status(500).json({ message: error.message})
        };
}

module.exports ={
    findAllGames, 
    findGameById,
    addNewGame
}