const a ={
    index:(req,res) => {
      
        let estudante = {
            nome:'caio',curso:'como vender droge',
            nome:'B',curso:'2',
            nome:'C',curso:'3'
            }
            

        return res.render("index",estudante)
    }
}

module.exports = a