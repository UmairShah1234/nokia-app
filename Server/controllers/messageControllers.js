const { EnglishToNokia, NokiaToEnglish } = require("../helpers/translation");
const time = new Date();

const postMessage = (req, res) => {
    const { message } = req.body;
    let translation;
    let sender = req.user
    console.log(message);
    if (!message) {
        console.log(new Date().toLocaleString(time.getMinutes()));
        return res.status(400).json({ message: "Please Enter Something" })
    }

    if (sender === 'Earth') {
        translation = EnglishToNokia(message.toLowerCase());
    } else {
        translation = NokiaToEnglish(message);
    }
    console.log(new Date().toLocaleString(time.getMinutes()));
    console.log(translation);
    return res.status(200).json({message: {
        "Response ": translation,
        "Input": message 
    }});
}

module.exports = postMessage;