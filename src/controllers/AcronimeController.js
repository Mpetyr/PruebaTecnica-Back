import axios from "axios";

let url = `http://www.nactem.ac.uk/software/acromine/dictionary.py?sf=`

export const getAcronime = async (req, res) => {

    
    try {
        const result = await axios.get(url + req.body.acronimo)

        console.log(req.body.acronimo)

        return res.status(200).json(result.data[0].lfs)
        
    } catch (error) {
        return res.status(400).json(error)
    }
}